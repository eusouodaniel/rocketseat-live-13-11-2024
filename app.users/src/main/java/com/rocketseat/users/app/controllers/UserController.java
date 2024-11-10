package com.rocketseat.users.app.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class UserController {

  @GetMapping("/users")
  List<String> get() {
    log.info("Check users...");
    List<String> users = new ArrayList<>(); 
    users.add("Usuário 1");
    users.add("Usuário 2");
    
    log.info("Finally Check users...");
    return users;
  }
}