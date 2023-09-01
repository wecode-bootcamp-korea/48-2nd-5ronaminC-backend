-- migrate:up
ALTER TABLE product_images ADD image_number INT NULL;

-- migrate:down

