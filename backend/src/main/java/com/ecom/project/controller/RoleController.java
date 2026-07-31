package com.ecom.project.controller;

import com.ecom.project.entity.Role;
import com.ecom.project.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class RoleController {

    private final RoleService roleService;

    @GetMapping("/roles")
    public List<Role> getAllRoles(){
        return roleService.findAllRoles();
    }

}
