-- test: add ficticious users
-- test: add ficticious stored recipes
-- test: add pairing wine types. Note: wine_id can be paired with another matching value on the page.

INSERT INTO users (first_name, last_name, email, userpassword) VALUES ('harryhoudini2031', 'Houdini@saturnsring.com', 'testacct');
INSERT INTO users (first_name, last_name, email, userpassword) VALUES ('thomasfreedman1999', 'TFreedman@saturnsring.com', 'testacct');
INSERT INTO users (first_name, last_name, email, userpassword) VALUES ('jasonappleton2018', 'Houdini@saturnsring.com', 'testacct');

INSERT INTO recipes (userid, uri_recipe, uri_wine, isFavorite) VALUES ('1', 'https://api.edamam.com/search?q=2914b1067c18e4bc24a3fc7cb7f2bb10&app_id=9550365e&app_key=62b808ba14bc95262bab3c0876be2412', 'http://api.snooth.com/wines/?q=chateau-lafite-rothschild-red-bordeaux-blend-pauillac-1986&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&s=sr', '1');
INSERT INTO recipes (userid, uri_recipe, uri_wine, isFavorite) VALUES ('1', 'https://api.edamam.com/search?q=0cb6700cc828d64167bfc35912cf49ae&app_id=9550365e&app_key=62b808ba14bc95262bab3c0876be2412', 'http://api.snooth.com/wines/?q=fanucchi-zinfandel-russian-river-valley-old-vine-fanucchi-wood-road-vineyard-2005&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&s=sr', '1');
INSERT INTO recipes (userid, uri_recipe, uri_wine, isFavorite) VALUES ('1', 'https://api.edamam.com/search?q=8a7fd2e82933027adec62e08983728df&app_id=9550365e&app_key=62b808ba14bc95262bab3c0876be2412', 'http://api.snooth.com/wines/?q=sara-bee-sweet-moscato-nv&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&s=sr', '1');
INSERT INTO recipes (userid, uri_recipe, uri_wine, isFavorite) VALUES ('2', 'https://api.edamam.com/search?q=3b53c9a0508d5f707a0dfd525f1e4412&app_id=9550365e&app_key=62b808ba14bc95262bab3c0876be2412', 'http://api.snooth.com/wines/?q=bel-lago-semi-dry-reisling&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&s=sr', '1');
INSERT INTO recipes (userid, uri_recipe, uri_wine, isFavorite) VALUES ('3', 'https://api.edamam.com/search?q=3f0ce55d11f4a075bb39c2091e59e261&app_id=9550365e&app_key=62b808ba14bc95262bab3c0876be2412', 'http://api.snooth.com/wines/?q=blush-pinot-grigio-delle-venezie-folonari-2011&akey=5pgy0fabib7s89ky9l5fx24ha754svspwnata652tn7gdr71&s=sr', '1');

INSERT INTO winetypes (wine_id, wine_type) VALUES ('0', 'Red Wine');
INSERT INTO winetypes (wine_id, wine_type) VALUES ('1', 'Red Wine');
INSERT INTO winetypes (wine_id, wine_type) VALUES ('2', 'Red Wine');
INSERT INTO winetypes (wine_id, wine_type) VALUES ('3', 'Red Wine');
INSERT INTO winetypes (wine_id, wine_type) VALUES ('3', 'Red Wine');
INSERT INTO winetypes (wine_id, wine_type) VALUES ('4', 'Red Wine');
INSERT INTO winetypes (wine_id, wine_type) VALUES ('5', 'Red Wine');
INSERT INTO winetypes (wine_id, wine_type) VALUES ('6', 'Red Wine');
INSERT INTO winetypes (wine_id, wine_type) VALUES ('7', 'Red Wine');
INSERT INTO winetypes (wine_id, wine_type) VALUES ('8', 'Red Wine');
INSERT INTO winetypes (wine_id, wine_type) VALUES ('9', 'Red Wine');



