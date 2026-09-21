package com.ecom.project.service;

import com.ecom.project.dto.request.OrderProductRequest;
import com.ecom.project.dto.request.OrderRequest;
import com.ecom.project.dto.response.OrderResponse;
import com.ecom.project.entity.OrderProduct;
import com.ecom.project.entity.Orders;
import com.ecom.project.entity.Product;
import com.ecom.project.entity.User;
import com.ecom.project.repository.OrdersRepository;
import com.ecom.project.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrdersRepository ordersRepository;
    private final ProductRepository productRepository;

    public List<OrderResponse> getAllOrders(User user){
        return null;
    }

    @Transactional
    public OrderResponse createOrder(OrderRequest request, User user) {
        Orders order = new Orders();
        order.setUser(user);
        order.setName(request.name());
        order.setSurname(request.surname());
        order.setPhone(request.phone());
        order.setCity(request.city());
        order.setDistrict(request.district());
        order.setNeighborhood(request.neighborhood());
        order.setNameOnCard(request.nameOnCard());
        order.setLastFour(request.lastFour());
        order.setExpireMonth(request.expireMonth());
        order.setExpireYear(request.expireYear());

        BigDecimal total = BigDecimal.ZERO;

        for (OrderProductRequest item : request.products()) {
            Product product = productRepository.findById(item.productId())
                    .orElseThrow(() -> new EntityNotFoundException(
                            "Ürün bulunamadı: " + item.productId()));

            OrderProduct op = new OrderProduct();
            op.setProduct(product);
            op.setCount(item.count());
            op.setDetail(item.detail());

            total = total.add(
                    product.getPrice().multiply(BigDecimal.valueOf(item.count()))
            );

            order.addOrderProduct(op);
        }

        order.setPrice(total);

        ordersRepository.save(order);

        return OrderResponse.from(order);
    }

}
