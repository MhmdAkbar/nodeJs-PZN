import { getProductById } from "../src/database"
import { ProductService } from "../src/product-service";


jest.mock("../src/database")
test('mock modules getProductById', () => {
    getProductById.mockImplementation((id) => {
        return {
            id: id,
            name: "product mock"
        }
    });

    const product = ProductService.findById(1);

    expect(product).toEqual({
        id: 1,
        name: "product mock"
    });
})