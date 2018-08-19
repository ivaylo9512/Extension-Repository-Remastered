package com.tick42.quicksilver.repositories.base;

import com.tick42.quicksilver.models.Extension;

import java.util.List;

public interface ExtensionRepository extends GenericRepository<Extension> {
    List<Extension> findByName(String searchQuery);
}