export const demoTemplates = [
  {
    prompt: 'Holiday destinations',
    value:
      '[\n  {{#repeat 5}}\n    {\n      "name": "{{faker \'address.city\'}}",\n      "country": "{{faker \'address.country\'}}",\n      "description": "{{faker \'lorem.paragraph\'}}",\n      "rating": {{faker \'datatype.number\' min=1 max=5}}},\n      "isPopular": {{faker \'datatype.boolean\'}}\n    }\n  {{/repeat}}\n]'
  },
  {
    prompt: 'Top 10 German companies by market cap',
    value:
      '[\n  {\n    "rank": 1,\n    "name": "SAP SE",\n    "market_cap": "USD 174.6 billion"\n  },\n  {\n    "rank": 2,\n    "name": "Siemens AG",\n    "market_cap": "USD 123.5 billion"\n  },\n  {\n    "rank": 3,\n    "name": "Allianz SE",\n    "market_cap": "USD 103.5 billion"\n  },\n  {\n    "rank": 4,\n    "name": "BASF SE",\n    "market_cap": "USD 77.9 billion"\n  },\n  {\n    "rank": 5,\n    "name": "Bayer AG",\n    "market_cap": "USD 75.5 billion"\n  },\n  {\n    "rank": 6,\n    "name": "Deutsche Telekom AG",\n    "market_cap": "USD 72.5 billion"\n  },\n  {\n    "rank": 7,\n    "name": "Daimler AG",\n    "market_cap": "USD 71.5 billion"\n  },\n  {\n    "rank": 8,\n    "name": "Volkswagen AG",\n    "market_cap": "USD 70.6 billion"\n  },\n  {\n    "rank": 9,\n    "name": "Bayerische Motoren Werke AG",\n    "market_cap": "USD 68.9 billion"\n  },\n  {\n    "rank": 10,\n    "name": "Deutsche Bank AG",\n    "market_cap": "USD 67.5 billion"\n  }]'
  },
  {
    prompt: 'Top 10 IMDb movies',
    value:
      '[\n  {\n    "title": "The Shawshank Redemption",\n    "year": 1994,\n    "imdbID": "tt0111161"\n  },\n  {\n    "title": "The Godfather",\n    "year": 1972,\n    "imdbID": "tt0068646"\n  },\n  {\n    "title": "The Godfather: Part II",\n    "year": 1974,\n    "imdbID": "tt0071562"\n  },\n  {\n    "title": "The Dark Knight",\n    "year": 2008,\n    "imdbID": "tt0468569"\n  },\n  {\n    "title": "12 Angry Men",\n    "year": 1957,\n    "imdbID": "tt0050083"\n  },\n  {\n    "title": "Schindler\'s List",\n    "year": 1993,\n    "imdbID": "tt0108052"\n  },\n  {\n    "title": "The Lord of the Rings: The Return of the King",\n    "year": 2003,\n    "imdbID": "tt0167260"\n  },\n  {\n    "title": "Pulp Fiction",\n    "year": 1994,\n    "imdbID": "tt0110912"\n  },\n  {\n    "title": "The Lord of the Rings: The Fellowship of the Ring",\n    "year": 2001,\n    "imdbID": "tt0120737"\n  },\n  {\n    "title": "Forrest Gump",\n    "year": 1994,\n    "imdbID": "tt0109830"\n  },\n  {\n    "title": "Star Wars: Episode V - The Empire Strikes Back",\n    "year": 1980,\n    "imdbID": "tt0080684"\n  },\n  {\n    "title": "Inception",\n    "year": 2010,\n    "imdbID": "tt1375666"\n  },\n  {\n    "title": "The Lord of the Rings: The Two Towers",\n    "year": 2002,\n    "imdbID": "tt0167261"\n  },\n  {\n    "title": "The Matrix",\n    "year": 1999,\n    "imdbID": "tt0133093"\n  },\n  {\n    "title": "Goodfellas",\n    "year": 1990,\n    "imdbID": "tt0099685"\n  }\n]'
  },
  {
    prompt: 'Australian mammals',
    value:
      "[\n  {{#repeat 10}}\n    {\n      \"name\": \"{{faker 'name.firstName'}}\",\n      \"species\": \"{{faker 'animal.type'}}\",\n      \"isMarsupial\": {{faker 'datatype.boolean'}},\n      \"averageWeight\": {{faker 'datatype.float' between='0.1' and='1000' precision='0.01'}}\n    }\n    {{#unless @last}},{{/unless}}\n  {{/repeat}}\n]"
  },
  {
    prompt: 'Mediterranean recipes',
    value:
      '[\n    {\n      "name": "Greek Salad",\n      "ingredients": [\n        "tomatoes",\n        "cucumbers",\n        "red onion",\n        "feta cheese",\n        "kalamata olives",\n        "olive oil",\n        "red wine vinegar",\n        "oregano"\n      ],\n      "instructions": "1. Cut tomatoes and cucumbers into bite-sized pieces. 2. Slice red onion thinly. 3. Combine all ingredients in a large bowl. 4. Drizzle with olive oil and red wine vinegar. 5. Sprinkle with oregano. 6. Toss to combine. 7. Serve chilled."\n    },\n    {\n      "name": "Hummus",\n      "ingredients": [\n        "chickpeas",\n        "tahini",\n        "lemon juice",\n        "garlic",\n        "olive oil",\n        "salt"\n      ],\n      "instructions": "1. Drain and rinse chickpeas. 2. Combine chickpeas, tahini, lemon juice, garlic, and salt in a food processor. 3. Pulse until smooth. 4. Drizzle in olive oil while pulsing. 5. Serve with pita bread or vegetables."\n    },\n    {\n      "name": "Tabbouleh",\n      "ingredients": [\n        "bulgur wheat",\n        "tomatoes",\n        "parsley",\n        "mint",\n        "green onion",\n        "lemon juice",\n        "olive oil",\n        "salt"\n      ],\n      "instructions": "1. Cook bulgur wheat according to package instructions. 2. Chop tomatoes, parsley, mint, and green onion. 3. Combine all ingredients in a large bowl. 4. Drizzle with lemon juice and olive oil. 5. Season with salt. 6. Toss to combine. 7. Serve chilled."\n    }\n  ]'
  },
  {
    prompt: 'Top 10 ETFs',
    value:
      '[\n    {\n      "name": "SPDR S&P 500 ETF Trust",\n      "symbol": "SPY"\n    },\n    {\n      "name": "Invesco QQQ Trust",\n      "symbol": "QQQ"\n    },\n    {\n      "name": "Vanguard Total Stock Market ETF",\n      "symbol": "VTI"\n    },\n    {\n      "name": "iShares Russell 2000 ETF",\n      "symbol": "IWM"\n    },\n    {\n      "name": "Vanguard S&P 500 ETF",\n      "symbol": "VOO"\n    },\n    {\n      "name": "Financial Select Sector SPDR Fund",\n      "symbol": "XLF"\n    },\n    {\n      "name": "iShares MSCI EAFE ETF",\n      "symbol": "EFA"\n    },\n    {\n      "name": "iShares MSCI Emerging Markets ETF",\n      "symbol": "EEM"\n    },\n    {\n      "name": "iShares Core S&P 500 ETF",\n      "symbol": "IVV"\n    },\n    {\n      "name": "Health Care Select Sector SPDR Fund",\n      "symbol": "XLV"\n    }\n  ]'
  },
  {
    prompt: 'React Flow configuration with one parent and two children',
    value:
      '{\n  "nodes": [\n    {\n      "id": "parent",\n      "type": "default",\n      "position": {\n        "x": 100,\n        "y": 100\n      },\n      "data": {\n        "label": "Parent Node"\n      }\n    },\n    {\n      "id": "child1",\n      "type": "default",\n      "position": {\n        "x": 250,\n        "y": 50\n      },\n      "data": {\n        "label": "Child Node 1"\n      }\n    },\n    {\n      "id": "child2",\n      "type": "default",\n      "position": {\n        "x": 250,\n        "y": 150\n      },\n      "data": {\n        "label": "Child Node 2"\n      }\n    }\n  ],\n  "edges": [\n    {\n      "id": "edge1",\n      "type": "default",\n      "source": "parent",\n      "target": "child1",\n      "animated": true\n    },\n    {\n      "id": "edge2",\n      "type": "default",\n      "source": "parent",\n      "target": "child2",\n      "animated": true\n    }\n  ]\n}'
  },
  {
    prompt: 'Stripe invoice',
    value:
      '{\n  "id": "in_1H9gJd2eZvKYlo2C5zJz5z",\n  "object": "invoice",\n  "amount_due": 1000,\n  "amount_paid": 0,\n  "amount_remaining": 1000,\n  "application_fee_amount": null,\n  "attempt_count": 0,\n  "attempted": false,\n  "auto_advance": true,\n  "billing_reason": "subscription_create",\n  "charge": null,\n  "collection_method": "charge_automatically",\n  "created": 1626840000,\n  "currency": "usd",\n  "custom_fields": null,\n  "customer": "cus_JKl3h4i5j6k7l8m9",\n  "customer_address": null,\n  "customer_email": "john.doe@example.com",\n  "customer_name": "John Doe",\n  "customer_phone": null,\n  "customer_shipping": null,\n  "customer_tax_exempt": null,\n  "customer_tax_ids": [],\n  "default_payment_method": null,\n  "description": null,\n  "discount": null,\n  "due_date": null,\n  "ending_balance": 1000,\n  "footer": null,\n  "hosted_invoice_url": "https://pay.stripe.com/invoice/invst_1H9gJd2eZvKYlo2C5zJz5z",\n  "invoice_pdf": "https://pay.stripe.com/invoice/invst_1H9gJd2eZvKYlo2C5zJz5z/pdf",\n  "lines": {\n    "data": [\n      {\n        "id": "sub_JKl3h4i5j6k7l8m9",\n        "object": "line_item",\n        "amount": 1000,\n        "currency": "usd",\n        "description": "Monthly subscription",\n        "discount_amounts": [],\n        "discountable": true,\n        "discounts": [],\n        "livemode": false,\n        "metadata": {},\n        "period": {\n          "end": 1658376000,\n          "start": 1626840000\n        },\n        "plan": {\n          "id": "plan_JKl3h4i5j6k7l8m9",\n          "object": "plan",\n          "active": true,\n          "aggregate_usage": null,\n          "amount": 1000,\n          "amount_decimal": "1000",\n          "billing_scheme": "per_unit",\n          "created": 1626840000,\n          "currency": "usd",\n          "interval": "month",\n          "interval_count": 1,\n          "livemode": false,\n          "metadata": {},\n          "nickname": null,\n          "product": "prod_JKl3h4i5j6k7l8m9",\n          "tiers": null,\n          "tiers_mode": null,\n          "transform_usage": null,\n          "trial_period_days": null,\n          "usage_type": "licensed"\n        },\n        "price": null,\n        "proration": false,\n        "quantity": 1,\n        "subscription": "sub_JKl3h4i5j6k7l8m9",\n        "subscription_item": "si_JKl3h4i5j6k7l8m9",\n        "tax_amounts": [],\n        "tax_rates": [],\n        "type": "subscription"\n      }\n    ],\n    "has_more": false,\n    "object": "list",\n    "url": "/v1/invoices/in_1H9gJd2eZvKYlo2C5zJz5z/lines"\n  },\n  "livemode": false,\n  "metadata": {},\n  "next_payment_attempt": null,\n  "number": "D9C3C7C-0001",\n  "paid": false,\n  "payment_intent": null,\n  "period_end": 1658376000,\n  "period_start": 1626840000,\n  "post_payment_credit_notes_amount": 0,\n  "pre_payment_credit_notes_amount": 0,\n  "receipt_number": null,\n  "starting_balance": 1000,\n  "statement_descriptor": null,\n  "status": "draft",\n  "status_transitions": {\n    "finalized_at": null,\n    "marked_uncollectible_at": null,\n    "paid_at": null,\n    "voided_at": null\n  },\n  "subscription": "sub_JKl3h4i5j6k7l8m9",\n  "subtotal": 1000,\n  "tax": null,\n  "tax_percent": null,\n  "total": 1000,\n  "total_discount_amounts": [],\n  "total_tax_amounts": [],\n  "transfer_data": null,\n  "webhooks_delivered_at": null\n}'
  },
  {
    prompt: 'Weapons enchantments',
    value:
      '[\n  {\n    "name": "Sharpness",\n    "description": "Increases damage dealt to mobs",\n    "max_level": 5\n  },\n  {\n    "name": "Smite",\n    "description": "Increases damage dealt to undead mobs",\n    "max_level": 5\n  },\n  {\n    "name": "Bane of Arthropods",\n    "description": "Increases damage dealt to arthropod mobs",\n    "max_level": 5\n  },\n  {\n    "name": "Knockback",\n    "description": "Increases knockback dealt to mobs",\n    "max_level": 2\n  },\n  {\n    "name": "Fire Aspect",\n    "description": "Sets mobs on fire",\n    "max_level": 2\n  },\n  {\n    "name": "Looting",\n    "description": "Increases loot dropped by mobs",\n    "max_level": 3\n  },\n  {\n    "name": "Unbreaking",\n    "description": "Increases durability of the weapon",\n    "max_level": 3\n  },\n  {\n    "name": "Mending",\n    "description": "Repairs the weapon using experience orbs",\n    "max_level": 1\n  },\n  {\n    "name": "Curse of Vanishing",\n    "description": "Causes the weapon to disappear on death",\n    "max_level": 1\n  }\n]'
  },

  {
    prompt: 'Sport cars',
    value:
      '[\n  {{#repeat 10}}\n    {\n      "make": "{{faker \'vehicle.manufacturer\'}}",\n      "model": "{{faker \'vehicle.model\'}}",\n      "year": "{{faker \'date.past\' 10}}",\n      "color": "{{faker \'vehicle.color\'}}",\n      "isAutomatic": {{faker \'datatype.boolean\'}},\n      "topSpeed": {{faker \'datatype.number\' max=200}},\n      "price": "{{faker \'finance.amount\'}}"\n    }\n    {{#unless @last}},{{/unless}}\n  {{/repeat}}\n]'
  }
];