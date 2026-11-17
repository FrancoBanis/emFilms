package com.emfilms.backend.services;

import com.emfilms.backend.entities.Cinephile;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
@Service
public class JwtService {
    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private Long jwtExpiration;


    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    private String buildToken(Cinephile cinephile) {
        return Jwts.builder()
                .id(cinephile.getIdUser().toString())
                .subject(cinephile.getEmail())
                .claim("nickName", cinephile.getNickName())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(getSigningKey())
                .compact();
    }

    private Claims extractClaims(String token){
        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
    private boolean isTokenExpired(String token) {
        return extractClaims(token).getExpiration().before(new Date());
    }

    public String generateToken(Cinephile cinephile ) {
        return buildToken(cinephile);
    }
    public String extractEmail(String token) {
        return extractClaims(token).getSubject();
    }
    public boolean isTokenValid (String token, UserDetails cinephile) {
        final String email = extractEmail(token);
        return email.equals(cinephile.getUsername()) && !isTokenExpired(token);
    }
}
