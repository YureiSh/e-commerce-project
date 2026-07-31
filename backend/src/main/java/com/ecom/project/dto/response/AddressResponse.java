package com.ecom.project.dto.response;

import com.ecom.project.entity.Address;
import jakarta.annotation.Nullable;

public record AddressResponse(
        Long id,
        Long userId,
        String title,
        String name,
        String surname,
        String phone,

        @Nullable
        String city,

        @Nullable
        String district,

        @Nullable
        String neighborhood
) {
        public static AddressResponse from(Address address) {
                return new AddressResponse(
                        address.getId(),
                        address.getUser().getId(),
                        address.getTitle(),
                        address.getName(),
                        address.getSurname(),
                        address.getPhone(),
                        address.getCity(),
                        address.getDistrict(),
                        address.getNeighborhood());
        }
}
