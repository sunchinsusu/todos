package com.ntt.todos.request;

import java.io.Serializable;

public class Registry implements Serializable {
    private String name;
    private String username;
    private String password;

    public Registry() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
