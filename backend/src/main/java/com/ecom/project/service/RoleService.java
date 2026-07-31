package com.ecom.project.service;

import com.ecom.project.entity.Role;
import com.ecom.project.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleService {

    private final RoleRepository roleRepository;

    public List<Role> findAllRoles(){
        return roleRepository.findAll();
    }

}
