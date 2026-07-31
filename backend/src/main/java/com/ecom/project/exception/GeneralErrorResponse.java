package com.ecom.project.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class GeneralErrorResponse {
    private Integer status;
    private String message;
    private Long timestamp;
    private LocalDateTime localDateTime;
}
