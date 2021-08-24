
CREATE TABLE 
    IF NOT EXISTS
        products(
            product_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            name VARCHAR(50) NOT NULL,
            description VARCHAR(250) NOT NULL,
            brand VARCHAR(50) NOT NULL,
            image_url VARCHAR(250) NOT NULL,
            price INTEGER NOT NULL,
            category VARCHAR(50) NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW()

        );

CREATE TABLE 
    IF NOT EXISTS
        reviews(
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            comment VARCHAR(250) NOT NULL,
            rate INTEGER NOT NULL,
            product_id VARCHAR(50) NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW()
        );



