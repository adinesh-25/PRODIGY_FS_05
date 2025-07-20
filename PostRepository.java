package com.example.socialbackend.repository;

import com.example.socialbackend.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}