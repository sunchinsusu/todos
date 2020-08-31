package com.ntt.todos.response;

import java.io.Serializable;

public class StatResponse implements Serializable {
    private int future;
    private int present;
    private int fault;
    private int success;

    public StatResponse() {
    }

    public StatResponse(int future, int present, int success, int fault) {
        this.future = future;
        this.present = present;
        this.fault = fault;
        this.success = success;
    }

    public int getFuture() {
        return future;
    }

    public void setFuture(int future) {
        this.future = future;
    }

    public int getPresent() {
        return present;
    }

    public void setPresent(int present) {
        this.present = present;
    }

    public int getFault() {
        return fault;
    }

    public void setFault(int fault) {
        this.fault = fault;
    }

    public int getSuccess() {
        return success;
    }

    public void setSuccess(int success) {
        this.success = success;
    }
}
