package com.ecom.project.service;

import com.ecom.project.dto.request.AddressRequest;
import com.ecom.project.dto.response.AddressResponse;
import com.ecom.project.entity.Address;
import com.ecom.project.entity.User;
import com.ecom.project.exception.AddressException;
import com.ecom.project.repository.AddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AddressService {

    private final AddressRepository addressRepository;

    public List<AddressResponse> findAllAddresses(User user) {
        return addressRepository
                .findByUserId(user.getId())
                .stream()
                .map(AddressResponse::from)
                .toList();
    }

    @Transactional
    public AddressResponse createAddress(AddressRequest request, User user){

        Address address = new Address();
        address.setUser(user);

        address.setTitle(request.title());
        address.setName(request.name());
        address.setSurname(request.surname());
        address.setPhone(request.phone());
        address.setCity(request.city());
        address.setDistrict(request.district());
        address.setNeighborhood(request.neighborhood());


        addressRepository.save(address);
        return AddressResponse.from(address);
    }

    @Transactional
    public AddressResponse updateAddress(AddressRequest request, User user, Long addressId){

        Address addressToUpdate = addressRepository.findById(addressId)
                .orElseThrow(()-> new AddressException("Card is not found!", HttpStatus.NOT_FOUND));

        if (!addressToUpdate.getUser().getId().equals(user.getId())) {
            throw new AddressException("Card is not found!", HttpStatus.NOT_FOUND);
        }

        addressToUpdate.setTitle(request.title());
        addressToUpdate.setName(request.name());
        addressToUpdate.setSurname(request.surname());
        addressToUpdate.setPhone(request.phone());
        addressToUpdate.setCity(request.city());
        addressToUpdate.setDistrict(request.district());
        addressToUpdate.setNeighborhood(request.neighborhood());

        addressRepository.save(addressToUpdate);
        return AddressResponse.from(addressToUpdate);
    }

    @Transactional
    public String deleteAddress(User user, Long addressId) {
        Address addressToDelete = addressRepository.findById(addressId)
                .orElseThrow(() -> new AddressException("Address is not found!", HttpStatus.NOT_FOUND));

        if (!addressToDelete.getUser().getId().equals(user.getId())) {
            throw new AddressException("Address is not found!", HttpStatus.NOT_FOUND);
        }

        addressRepository.delete(addressToDelete);
        return "Address record deleted!";
    }

}
