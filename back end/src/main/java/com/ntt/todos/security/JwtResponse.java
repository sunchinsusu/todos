package com.ntt.todos.security;

import java.io.Serializable;

public class JwtResponse implements Serializable {
    private static final long serialVersionUID = 1L;
    private String user;
    private String token;


    public JwtResponse() {
    }

    public JwtResponse(String user, String token) {
        this.user = user;
        this.token = token;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
