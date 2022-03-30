const { MongoClient} = require('mongodb');
async function main(){
    

const MONGODB_URI = 'mongodb+srv://arefbitar:admin@cluster0.8zdw6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'clearfashion';
const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
const db =  client.db(MONGODB_DB_NAME)

const products = [
    {
      "link": "https://www.montlimart.com/ceinture-kilometre-camel.html",
      "brand": "montlimart",
      "name": "CEINTURE KILOMETRE",
      "price": 49,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-ceinture-homme-kilometre-camel-made-in-france-1.jpg",
      "_id": "f8a0e828-0879-5984-abae-2b1251b6f318"
    },
    {
      "link": "https://www.montlimart.com/chemise-saint-paul-vert-rayures.html",
      "brand": "montlimart",
      "name": "CHEMISE SAINT PAUL",
      "price": 150,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-chemise-homme-vert-rayures-made-in-france-coton-bio-4.jpg",
      "_id": "fef1dc8e-b0b9-5562-98be-2f212fc48dba"
    },
    {
      "link": "https://www.montlimart.com/pull-damier-vert.html",
      "brand": "montlimart",
      "name": "PULL DAMIER",
      "price": 135,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-pull-homme-damier-vert-made-in-france-coton-bio-1.jpg",
      "_id": "e5367282-f66a-57b6-b512-e1bdc9e5b957"
    },
    {
      "link": "https://www.montlimart.com/baskets-impact-kaki.html",
      "brand": "montlimart",
      "name": "BASKETS IMPACT",
      "price": 149,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-sneakers-homme-impact-kaki-made-in-france-1.jpg",
      "_id": "2588bb28-597a-56ac-88eb-1819d4d44599"
    },
    {
      "link": "https://www.montlimart.com/pull-damier-noir.html",
      "brand": "montlimart",
      "name": "PULL DAMIER",
      "price": 135,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-pull-homme-damier-noir-made-in-france-coton-bio-1.jpg",
      "_id": "6b673bfe-1bfe-5a9b-98d0-062f873a291d"
    },
    {
      "link": "https://www.montlimart.com/chemise-montlimart-beige.html",
      "brand": "montlimart",
      "name": "CHEMISE MONTLIMART",
      "price": 95,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-chemise-homme-montlimart-beige-coton-bio-1.jpg",
      "_id": "c4eb278a-8499-5e97-aa28-94fada2814dc"
    },
    {
      "link": "https://www.montlimart.com/pull-origine-anthracite.html",
      "brand": "montlimart",
      "name": "PULL ORIGINE",
      "price": 135,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-pull-homme-origine-recycl_-made-in-france-anthracite-1.jpg",
      "_id": "b9b240f9-a988-5071-9d62-c0f293422ce5"
    },
    {
      "link": "https://www.montlimart.com/chaussettes-coffret-montlisocks-gris-vert-marine.html",
      "brand": "montlimart",
      "name": "CHAUSSETTES COFFRET MONTLISOCKS",
      "price": 42,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-coffret-homme-chaussettes-montlisocks-gris-vert-marine-coton-bio-1.jpg",
      "_id": "f6793339-b023-5005-8d6a-d7a199f1ed7c"
    },
    {
      "link": "https://www.montlimart.com/chaussettes-coffret-montlisocks-kaki-bordeaux-anthra.html",
      "brand": "montlimart",
      "name": "CHAUSSETTES COFFRET MONTLISOCKS",
      "price": 42,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-coffret-homme-chaussettes-montlisocks-kaki-anthra-bordeaux-coton-bio-1.jpg",
      "_id": "fd11bf82-c45c-5369-9e1b-b91178e7bb2f"
    },
    {
      "link": "https://www.montlimart.com/pull-origine-beige.html",
      "brand": "montlimart",
      "name": "PULL ORIGINE",
      "price": 135,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-pull-homme-origine-recycl_-made-in-france-beige-1.jpg",
      "_id": "65c5707a-e4eb-59aa-a6cb-e326256ce9ad"
    },
    {
      "link": "undefined",
      "brand": "montlimart",
      "name": "",
      "price": null,
      "_id": "6e789c0a-7055-5ec6-b18e-e2285ddabdb5"
    },
    {
      "link": "https://www.montlimart.com/boots-montpluie-cognac-carreaux.html",
      "brand": "montlimart",
      "name": "BOOTS MONTPLUIE",
      "price": 85,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-boots-homme-montpluie-cognac-carreaux-made-in-france-1.jpg",
      "_id": "955d0c3b-d420-55b8-ad9a-7f399df936a6"
    },
    {
      "link": "https://www.montlimart.com/pull-veritable-bleu-marine.html",
      "brand": "montlimart",
      "name": "PULL VERITABLE",
      "price": 130,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-pull-homme-veritable-bleu-marine-made-in-france-coton-bio-1.jpg",
      "_id": "ba661499-3b1f-5c8b-a49a-a2520ce469a4"
    },
    {
      "link": "https://www.montlimart.com/chemise-surtout-bleu-marine.html",
      "brand": "montlimart",
      "name": "CHEMISE SURTOUT",
      "price": 100,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-surchemise-homme-surtout-bleu-marine-coton-2.jpg",
      "_id": "86a45a45-2a50-5211-860b-3856826e83ce"
    },
    {
      "link": "https://www.montlimart.com/baskets-impact-marine.html",
      "brand": "montlimart",
      "name": "BASKETS IMPACT",
      "price": 149,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/2/1/21ah-sneakers-homme-impact-marine-made-in-france-1.jpg",
      "_id": "c02263ef-d5f6-53f7-94d2-f387667a054b"
    },
    {
      "link": "https://www.montlimart.com/boots-montpluie-noir.html",
      "brand": "montlimart",
      "name": "BOOTS MONTPLUIE",
      "price": 85,
      "photo": "https://www.montlimart.com/media/catalog/product/cache/1/small_image/508, 720x/17f82f742ffe127f42dca9de82fb58b1/1/9/19ah-boots-homme-montpluie-noir-caoutchouc-recycle-made-in-france-2_1_1.jpg",
      "_id": "7fd978eb-b260-53fb-89b1-ca36c0acb449"
    },
    {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-base-navy",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Base Navy",
        "price": 59,
        "_id": "a5ea0a85-1dd7-57e8-9ab7-c2032df78e5a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-autumn-birds-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Autumn Birds Off-White",
        "price": 39,
        "_id": "ce203018-5365-5f54-85ab-9ec4a86f2402"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-gustavsberg-burgundy",
        "brand": "dedicated",
        "name": "T-shirt Gustavsberg Burgundy",
        "price": 49,
        "_id": "2121971f-f070-5da8-b557-a9feaa09777a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/puffer-jacket-dundret-secret-garden",
        "brand": "dedicated",
        "name": "Puffer Jacket Dundret Secret Garden",
        "price": 299,
        "_id": "317dbb07-d091-58b3-a694-4706d2b9c829"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-gustavsberg-dark-green",
        "brand": "dedicated",
        "name": "T-shirt Gustavsberg Dark Green",
        "price": 49,
        "_id": "9a7bbfae-b1fc-550d-9e67-adde7f460374"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/worker-jacket-sala-corduroy-black",
        "brand": "dedicated",
        "name": "Worker Jacket Sala Corduroy Black",
        "price": 119,
        "_id": "d3596213-5603-5007-bebc-b9a9cbde69ae"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/scarf-knitted-rosse-big-check-navy-black_-iris",
        "brand": "dedicated",
        "name": "Scarf Knitted Rosse Big Check Navy",
        "price": 49,
        "_id": "eea43d1f-8091-599a-83c8-c16c087a1d3c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/padded-jacket-vallentuna-corduroy-brown",
        "brand": "dedicated",
        "name": "Padded Jacket Vallentuna Corduroy Brown",
        "price": 149,
        "_id": "04b87621-1ede-53d1-81c7-9abdfd9243bd"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/hoodie-falun-color-bike-charcoal",
        "brand": "dedicated",
        "name": "Hoodie Falun Color Bike Charcoal",
        "price": 89,
        "_id": "0766d9f9-7d68-55b3-8bc1-edd38fdf2cdb"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/beanie-narvik-light-grey",
        "brand": "dedicated",
        "name": "Beanie Narvik Light Grey",
        "price": 39,
        "_id": "df499dc2-8396-5eb9-94d4-5d84f6b3f303"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/astrid",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Astrid",
        "price": 39,
        "_id": "571cbe3a-3d06-5960-b8a6-f0cdee669f08"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/worker-jacket-sala-corduroy-brown",
        "brand": "dedicated",
        "name": "Worker Jacket Sala Corduroy Brown",
        "price": 119,
        "_id": "2619509b-669e-5a1b-8d99-198ead30fb95"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/puffer-jacket-dundret-grey",
        "brand": "dedicated",
        "name": "Puffer Jacket Dundret Grey",
        "price": 249,
        "_id": "420ccbaf-ccd5-5727-9f69-5b419801bd8d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-bike-pattern-navy",
        "brand": "dedicated",
        "name": "Socks Sigtuna Bike Pattern Navy",
        "price": 9,
        "_id": "ef29a6b2-c98c-5085-8004-23ccb569231d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/worker-jacket-sala-corduroy-deep-blue",
        "brand": "dedicated",
        "name": "Worker Jacket Sala Corduroy Deep Blue",
        "price": 119,
        "_id": "507b9807-bd0e-5c7e-8874-cc9c5c4fe9c2"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/bucket-hat-corduroy-black",
        "brand": "dedicated",
        "name": "Bucket Hat Corduroy Black",
        "price": 49,
        "_id": "32c959a9-6e03-5ef0-8707-1439da412f02"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-chinchillin",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Chinchillin",
        "price": 34,
        "_id": "ee7bf655-d129-57d0-a3b2-6815c1667b30"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/windbreaker-skara-leaf-green",
        "brand": "dedicated",
        "name": "Windbreaker Skara Leaf Green",
        "price": 99,
        "_id": "9e9c0ed2-ff80-5e1d-9355-7cce67ee6838"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-world-champion",
        "brand": "dedicated",
        "name": "Socks Sigtuna World Champion",
        "price": 9,
        "_id": "78613f63-2e39-58ad-962e-c26f05eeedca"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-double-stripes-white",
        "brand": "dedicated",
        "name": "Socks Sigtuna Double Stripes",
        "price": 9,
        "_id": "9304f190-1676-519c-9487-4b8086778052"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-bowser",
        "brand": "dedicated",
        "name": "Socks Sigtuna Bowser",
        "price": 9,
        "_id": "6c8d5c69-da0c-52ec-9c0a-de71d97347b2"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-double-stripes",
        "brand": "dedicated",
        "name": "Socks Sigtuna Double Stripes",
        "price": 9,
        "_id": "85895467-0ff7-5710-b192-8dbb20ca8f16"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/beanie-narvik-washed-orange",
        "brand": "dedicated",
        "name": "Beanie Narvik Washed Orange",
        "price": 39,
        "_id": "5b6c0179-87fd-5d92-9cae-e4c218f163bb"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-bike-pattern-black",
        "brand": "dedicated",
        "name": "Socks Sigtuna Bike Pattern Black",
        "price": 9,
        "_id": "31db3089-cf41-55a3-abc8-8fe9dfc77d8a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-short-sleeve-marstrand-monkey-trees",
        "brand": "dedicated",
        "name": "Shirt Short Sleeve Marstrand Monkey Trees",
        "price": 79,
        "_id": "2999e691-28af-55d4-a5b2-f63817ba224e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/save-the-arctic",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Save the Arctic",
        "price": 34,
        "_id": "38dad6d1-0475-595b-b511-b9b6ae6607fc"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-peanuts-3-pack",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Peanuts 3-pack",
        "price": 59,
        "_id": "2a2854bf-2d69-54e5-beac-20c5df1df551"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-bumblebees",
        "brand": "dedicated",
        "name": "Socks Sigtuna Bumblebees",
        "price": 9,
        "_id": "96eb6ccb-8075-5410-b618-ae39e43ba162"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-green-tube",
        "brand": "dedicated",
        "name": "Socks Sigtuna Green Tube",
        "price": 9,
        "_id": "d811e8d7-8670-5f65-98f4-519a925b24e4"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-fuck-racism-pattern-black",
        "brand": "dedicated",
        "name": "Socks Sigtuna Fuck Racism Pattern Black",
        "price": 9,
        "_id": "82d93520-d354-503e-9826-c1f743a42ad3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-fuck-racism-pattern-white",
        "brand": "dedicated",
        "name": "Socks Sigtuna Fuck Racism Pattern White",
        "price": 9,
        "_id": "21dadb17-cfc8-5e48-b13a-4177f33f89d7"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-world-map-blue",
        "brand": "dedicated",
        "name": "Socks Sigtuna World Map Blue",
        "price": 9,
        "_id": "2b969b60-d9d5-589c-974f-ea9bd7f94c2b"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-dedicated-logo-black",
        "brand": "dedicated",
        "name": "Socks Sigtuna Dedicated Logo Black",
        "price": 9,
        "_id": "0670e5c4-9ce9-5620-ac92-388f199b8db5"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-bike-pattern-white",
        "brand": "dedicated",
        "name": "Socks Sigtuna Bike Pattern White",
        "price": 9,
        "_id": "6f813782-cfbb-581c-9d0c-99a37ae36628"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-lemons-black",
        "brand": "dedicated",
        "name": "Socks Sigtuna Lemons Black",
        "price": 9,
        "_id": "4c537d1b-8675-5b4f-8517-9acdaecb8f60"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-bike-pattern-burgundy-burgundy",
        "brand": "dedicated",
        "name": "Socks Sigtuna Bike Pattern Burgundy",
        "price": 9,
        "_id": "f1a7d3fd-8654-5e4a-a618-354022a36e80"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-fuck-racism-pattern-golden-yellow",
        "brand": "dedicated",
        "name": "Socks Sigtuna Fuck Racism Pattern Golden Yellow",
        "price": 9,
        "_id": "3821433f-f135-5ba5-bd01-0043614705ec"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-peach",
        "brand": "dedicated",
        "name": "Socks Sigtuna Peach",
        "price": 9,
        "_id": "1a9e095b-df44-5432-93a3-7cfb17564257"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-super-mario",
        "brand": "dedicated",
        "name": "Socks Sigtuna Super Mario",
        "price": 9,
        "_id": "3435cab2-e2b3-5fbf-8786-cccea0660c1f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-super-mario-pattern-white",
        "brand": "dedicated",
        "name": "Socks Sigtuna Super Mario Pattern White",
        "price": 9,
        "_id": "fb664a02-84a1-52ed-aecc-5d7bdcc92574"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-super-mario-pattern-black",
        "brand": "dedicated",
        "name": "Socks Sigtuna Super Mario Pattern Black",
        "price": 9,
        "_id": "22bcbfc5-00db-5ba8-8c7e-3caa5579ba70"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-toad",
        "brand": "dedicated",
        "name": "Socks Sigtuna Toad",
        "price": 9,
        "_id": "d5287df3-843f-50d7-a225-3dc8595630ac"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-trees-leaf-green",
        "brand": "dedicated",
        "name": "Socks Sigtuna Trees Leaf Green",
        "price": 9,
        "_id": "d043afc7-9736-5664-b567-06a818ca816a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-base-black",
        "brand": "dedicated",
        "name": "Socks Sigtuna Base Black",
        "price": 9,
        "_id": "56043271-04c7-55b1-94fc-686d11a3d25f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-hummingbirds-black",
        "brand": "dedicated",
        "name": "Socks Sigtuna Hummingbirds Black",
        "price": 9,
        "_id": "7af3308f-8f47-5016-bdc5-b49736a0f464"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-local-planet-navy",
        "brand": "dedicated",
        "name": "Socks Sigtuna Local Planet Navy",
        "price": 9,
        "_id": "10836772-a717-5e42-8fbd-0bae7d706565"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-woodstock-green",
        "brand": "dedicated",
        "name": "Socks Sigtuna Woodstock Green",
        "price": 9,
        "_id": "23c15b86-ca60-5214-8adc-4ce46f729837"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-lucy-light-blue",
        "brand": "dedicated",
        "name": "Socks Sigtuna Lucy Light Blue",
        "price": 9,
        "_id": "5f24b578-3992-525d-94d4-544ff41c273d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-snoopy-red",
        "brand": "dedicated",
        "name": "Socks Sigtuna Snoopy Red",
        "price": 9,
        "_id": "27a8043e-17d2-5ee5-8aea-33b674e074d4"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-hummingbirds-white",
        "brand": "dedicated",
        "name": "Socks Sigtuna Hummingbirds White",
        "price": 9,
        "_id": "6b39ca1f-9c78-549c-8bdd-2a240ec473ca"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-peanuts-aop-white",
        "brand": "dedicated",
        "name": "Socks Sigtuna Peanuts AOP White",
        "price": 9,
        "_id": "8c1221a6-523f-53e8-a3cd-d5834dd7b562"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-vegetables-white",
        "brand": "dedicated",
        "name": "Socks Sigtuna Vegetables White",
        "price": 9,
        "_id": "475cae3b-1378-5a8f-8429-e75b284a6886"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-fruits-5-pack",
        "brand": "dedicated",
        "name": "Socks Sigtuna Fruits 5-pack",
        "price": 49,
        "_id": "7398b287-444a-58ce-9470-c87fb9a431c5"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-peanuts-5-pack",
        "brand": "dedicated",
        "name": "Socks Sigtuna Peanuts 5-pack",
        "price": 49,
        "_id": "ba7365e7-0062-5d6f-bbd1-b93bad026313"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-double-scarf-multi-color",
        "brand": "dedicated",
        "name": "Socks Sigtuna Double Scarf Multi Color",
        "price": 9,
        "_id": "bb55d920-d70a-565d-81fa-35378edd2f60"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-trees-black",
        "brand": "dedicated",
        "name": "Socks Sigtuna Trees Black",
        "price": 9,
        "_id": "a1e8b43f-31ff-5e04-9e1d-c2e068055e1f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-trees-color-grey-melange",
        "brand": "dedicated",
        "name": "Socks Sigtuna Trees Color Grey Melange",
        "price": 9,
        "_id": "666b5d7c-5901-537b-9269-008203108b41"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/socks-sigtuna-trees-5-pack",
        "brand": "dedicated",
        "name": "Socks Sigtuna Trees 5-pack",
        "price": 49,
        "_id": "8db5314e-9621-5004-ac91-f445e13199e1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/beanie-lofoten-brown",
        "brand": "dedicated",
        "name": "Beanie Lofoten Brown",
        "price": 34,
        "_id": "911d1b75-bfa2-5c02-a868-242141c6e07a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/beanie-kiruna-globe-black",
        "brand": "dedicated",
        "name": "Beanie Kiruna Globe Black",
        "price": 29,
        "_id": "729105dc-09e2-504b-846a-944f38695d40"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/swim-shorts-sandhamn-tie-dye-blue",
        "brand": "dedicated",
        "name": "Swim Shorts Sandhamn Tie Dye Blue",
        "price": 59,
        "_id": "42997394-e335-538d-b60a-91d948d61098"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/swim-shorts-sandhamn-tropic-leaves-grey",
        "brand": "dedicated",
        "name": "Swim Shorts Sandhamn Tropic Leaves Grey",
        "price": 59,
        "_id": "9102a9ee-7e86-518c-a0f2-816e5ab722b1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/swim-shorts-sandhamn-croc-hippo-pink",
        "brand": "dedicated",
        "name": "Swim Shorts Sandhamn Croc Hippo Pink",
        "price": 59,
        "_id": "1a70e2ac-1a3d-51d6-b3bb-ef817603fb9c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/swim-shorts-sandhamn-coconuts-yellow",
        "brand": "dedicated",
        "name": "Swim Shorts Sandhamn Coconuts Yellow",
        "price": 59,
        "_id": "5e6eb48a-8a44-5f0f-be20-be63f0de1963"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sport-cap-banana",
        "brand": "dedicated",
        "name": "Sport Cap Banana",
        "price": 34,
        "_id": "7a95bf5b-0727-5ce4-b606-d81ad612a962"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/like-adults",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Like Adults",
        "price": 34,
        "_id": "36b9b261-8cad-55ed-88e6-1d1384954073"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/give-me-some-space",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Give Me Some Space",
        "price": 34,
        "_id": "d351f41b-6b00-530e-bfc3-497b56dddbce"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-wish-you-were-here-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Wish You Were Here",
        "price": 34,
        "_id": "725e9faa-8e06-52bf-a96b-52449d810c7e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/caffeine-kick",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Caffeine Kick",
        "price": 34,
        "_id": "d0254bdd-caab-5d1a-a8b0-c0d97a713741"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/dedicated-bike-people",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Bike People Off-White",
        "price": 39,
        "_id": "7f01b16b-ff9b-547f-9b92-91f7f1fe41dd"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/worker-20-14119",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Worker 2.0",
        "price": 34,
        "_id": "0b586941-08b3-530b-9d1a-d25173968d57"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/stockholm-t-shirt-jungle",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Jungle",
        "price": 39,
        "_id": "1acb6f68-0604-548d-95dd-2f8c657aa763"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/video-retro",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Video Retro",
        "price": 34,
        "_id": "a431af0c-7838-566d-baca-b1575bc1e458"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/lazer-cats",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Lazer Cats",
        "price": 34,
        "_id": "a7cc01e4-10ec-5952-bac6-1566783d8a0c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/gangsta-rap-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Gangsta Rap",
        "price": 34,
        "_id": "b324d9c9-fd42-54ba-b5d5-22c08511344a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/cornelis",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Cornelis",
        "price": 39,
        "_id": "768f6358-4b35-56a0-a138-ac08119e4630"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-shaving",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Shaving",
        "price": 39,
        "_id": "7740c3fb-2dcd-5699-ac2c-750397ffbbc7"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-fika",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Fika",
        "price": 39,
        "_id": "83199225-ce78-547a-938b-a13306015902"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/fuck-racism",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Fuck Racism Black",
        "price": 34,
        "_id": "57128663-5456-5c2c-ae33-9416799b896d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/stockholm-t-shirt-sketch-bike",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Sketch Bike",
        "price": 34,
        "_id": "9abf82af-a2e0-5a48-9480-2a22b6228630"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/mother-nature",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Mother Nature",
        "price": 34,
        "_id": "497522f8-167d-5d32-a334-ba18a556ca00"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/you-fucked-the-planet",
        "brand": "dedicated",
        "name": "T-shirt Stockholm You Fucked The Planet",
        "price": 34,
        "_id": "017ddfde-8183-5683-895b-f2e7d663cd3a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-local-planet-navy",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Local Planet Navy",
        "price": 34,
        "_id": "4b3afe56-7fda-598f-8f97-21fe68efb4e0"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-rainbow-vibes",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Rainbow Vibes",
        "price": 39,
        "_id": "5e05328b-af3b-58a6-afe1-6d47fa90c081"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/stockholm-t-shirt-coffee-break",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Coffee Break",
        "price": 39,
        "_id": "348ea4d2-2a24-523b-9fe5-52c6b7019be0"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/stockholm-t-shirt-fuck-racism-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Fuck Racism White",
        "price": 34,
        "_id": "42ef51c0-e39d-5098-be85-95dedc43c876"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/stockholm-t-shirt-beer-biker",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Beer Biker",
        "price": 34,
        "_id": "396e7e65-1d56-5493-a45c-68165037438e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/stockholm-t-shirt-blue-birds",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Blue Birds",
        "price": 39,
        "_id": "c967cb53-70e3-58c4-b034-b520508aa320"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-phoney-date",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Phoney Date",
        "price": 39,
        "_id": "fa4aa8ce-87e8-583c-a6d3-56f02dec37f1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-love-your-mother",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Love Your Mother",
        "price": 34,
        "_id": "6da47412-74a8-5211-888e-f82003997cfb"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-tupac",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Tupac",
        "price": 39,
        "_id": "59be0b54-ac7e-5d08-9c11-6bf078721ecd"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-cat-flip-grey-melange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Cat Flip Grey Melange",
        "price": 34,
        "_id": "3544f25c-cddf-5dce-b91b-4eb5a8b0184f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-drawn-bike-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Drawn Bike Off-White",
        "price": 34,
        "_id": "bd41a816-6aa6-5461-9742-7179bbd8140f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-coffee-mind",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Coffee Mind",
        "price": 39,
        "_id": "99a22877-85f6-585e-8b2b-7cc53681ee88"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-cat-crowd",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Cat Crowd",
        "price": 39,
        "_id": "26bd1def-e424-5c7a-b044-cd2a65434553"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/stockholm-t-shirt-hasse-och-tage",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Hasse och Tage",
        "price": 39,
        "_id": "dea6e985-2901-5b03-859c-d9a49d92efc6"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/stockholm-t-shirt-astrid-och-duvan",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Astrid och Duvan",
        "price": 39,
        "_id": "9d56bba2-39f7-5da1-94cd-0cc7b415f2a3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-sucked-in",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Sucked In",
        "price": 39,
        "_id": "8a582977-afec-5647-b6ec-b888257728bb"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-plastic",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Plastic",
        "price": 34,
        "_id": "f3fc7040-d70b-503d-bf4e-bc587bfe2fc2"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-oh-shit",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Oh Shit",
        "price": 34,
        "_id": "3ff0c29c-9b8c-5d51-828b-63706655e567"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-how-to-draw-an-owl",
        "brand": "dedicated",
        "name": "T-shirt Stockholm How to Draw an Owl",
        "price": 34,
        "_id": "227413a4-851f-5775-810b-e278eb6095e2"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-good-things",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Good Things",
        "price": 34,
        "_id": "a55936fd-2a79-54f1-800e-a9fefbb48408"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-universal-love",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Universal Love",
        "price": 34,
        "_id": "3f8fa1ff-5d7a-54b7-ac06-c2c817469f63"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-burgundy",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Burgundy",
        "price": 29,
        "_id": "782e0233-f365-5ddf-8728-be3ae5b4d290"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-badminton-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Badminton White",
        "price": 39,
        "_id": "52467eaf-41bf-5b08-b45f-abeba785427e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-bike-pattern-black",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Bike Pattern Black",
        "price": 39,
        "_id": "65c72ff6-e42b-5ace-82ee-49863c91ef74"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-drone-love-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Drone Love Charcoal",
        "price": 39,
        "_id": "04652b79-5c0d-5bc3-bb52-21fc8605452e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-mustard",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Mustard",
        "price": 29,
        "_id": "20022947-b21e-542d-9d19-2d2e1da9617f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-going-gone-black",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Going Gone Black",
        "price": 34,
        "_id": "d0461822-1572-5034-9146-2140362473f9"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-doing-my-best-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Doing My Best White",
        "price": 39,
        "_id": "1b2c1a88-cc98-55f5-a284-c30388cc9732"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-nun-sleigh",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Nun Sleigh",
        "price": 34,
        "_id": "3f18b16b-c212-5091-b8c4-da12214739b6"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-map",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Map",
        "price": 39,
        "_id": "52a1ad50-e44b-5b6b-94d3-fe0d207837e3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-respect-life-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Respect Life Charcoal",
        "price": 34,
        "_id": "306497fa-28eb-54a0-a767-5fb255cf1b09"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-eat-fruit-grey-melange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Eat Fruit Grey Melange",
        "price": 39,
        "_id": "91c81172-db0e-5daf-a56c-fd13fbe93742"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-love-mother",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Love Mother",
        "price": 34,
        "_id": "c4094540-6877-5d02-8489-21d3ea4d2a76"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-stitch-bike-burgundy",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Stitch Bike Burgundy",
        "price": 34,
        "_id": "3d76ad40-a339-5f48-86df-ec511ffcbfbc"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-bike-pattern-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Bike Pattern Charcoal",
        "price": 39,
        "_id": "93096546-31c8-5775-8f72-2c138b3ea7a6"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-color-bike-grey-melange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Color Bike Grey Melange",
        "price": 34,
        "_id": "d1f0d367-d82a-502e-9416-25429abaac91"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-dedicated-logo-black",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Dedicated Logo Black",
        "price": 29,
        "_id": "18ef1a61-1987-5ccf-8561-32219878a597"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-dedicated-logo-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Dedicated Logo White",
        "price": 29,
        "_id": "fef90f85-d2cf-54be-8428-058af8d938c5"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-astrid-och-kofoten",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Astrid och Kofoten",
        "price": 39,
        "_id": "9355bc1b-ac52-5b29-92c8-632190d5bf9f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-bamboo",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Bamboo",
        "price": 39,
        "_id": "5656af0b-b7f8-547e-b89b-c7d4063940d1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-bike-pattern-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Bike Pattern Off-White",
        "price": 39,
        "_id": "aca50bf5-8fad-5379-af80-290d1399aa9c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-daisy",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Daisy",
        "price": 39,
        "_id": "0cd290ce-4631-5660-a3b3-03c7ed8ee04a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-cross-stitch-bike",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Cross Stitch Bike",
        "price": 34,
        "_id": "9eb46e0a-58d6-5976-8c17-802aacfa074f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-bicycle-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Bicycle Charcoal",
        "price": 34,
        "_id": "024912f0-6df6-5a22-b700-c03d259c12b6"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-local-planet-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Local Planet Off-White",
        "price": 34,
        "_id": "1f01592d-0b8f-5986-89a2-bb4805bfce5c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-play-to-win-grey-melange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Play To Win Grey Melange",
        "price": 39,
        "_id": "9ae11ccf-c627-5afe-a3ad-ce10333c823a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-life-is-fantastic-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Life Is Fantastic Off-White",
        "price": 39,
        "_id": "e1c85a0b-2e2e-5b09-a98f-5f4edbed3589"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-everything-is-good",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Everything Is Good",
        "price": 39,
        "_id": "2238c172-a19b-5393-a327-df031e9ab03c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-sugary-beverage-yellow",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Sugary Beverage Yellow",
        "price": 39,
        "_id": "5dbc8e3b-a645-59eb-b802-db651cc08dd4"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-vote-earth-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Vote Earth White",
        "price": 34,
        "_id": "c1700216-8518-5e7d-9246-285dd5e0cb41"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-catastrophe",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Catastrophe",
        "price": 34,
        "_id": "c7533f53-f6db-5fae-97ca-6998e8393e14"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-amazoff-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Amazoff Off-White",
        "price": 34,
        "_id": "1eca313a-b159-53dd-83cb-fd7bab0e7be1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-biketernity-black",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Biketernity Black",
        "price": 34,
        "_id": "f8c670f1-9e2f-5c01-bc2a-271ae99913bb"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-infinity-bike-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Infinity Bike White",
        "price": 34,
        "_id": "81371847-40db-5981-8e86-cdc28ffdd162"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-infinity-bike-black",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Infinity Bike Black",
        "price": 34,
        "_id": "93770742-91ef-529f-aa85-2baf7d28842a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-bike-commuters-navy",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Bike Commuters Navy",
        "price": 39,
        "_id": "a7d538ff-0692-5143-a3c0-d041d0efe07e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-secret-garden",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Secret Garden",
        "price": 39,
        "_id": "31b52290-fa77-5989-ab1a-819b6e385f70"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-local-planet-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Local Planet Charcoal",
        "price": 34,
        "_id": "5ae7968a-9949-5839-90b0-5a8647e299d4"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-local-planet-leaf-green",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Local Planet Leaf Green",
        "price": 34,
        "_id": "410e3ba6-607b-5292-acf1-b6c3a5ae1d7a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-stitch-bike-black",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Stitch Bike Black",
        "price": 34,
        "_id": "e733a6bc-86c6-557a-aed0-54c5e50e72f5"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-all-we-have",
        "brand": "dedicated",
        "name": "T-shirt Stockholm All We Have",
        "price": 39,
        "_id": "dddb6024-4675-573c-b16f-1ec777157083"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-bike-wheelie",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Bike Wheelie",
        "price": 34,
        "_id": "21487f33-0289-5d6e-9f9a-da21484d43e1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-camp-out",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Camp Out",
        "price": 34,
        "_id": "6e5b94e5-cdb8-555a-8cf4-a103a54642ba"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-cassette-lines-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Cassette Lines",
        "price": 34,
        "_id": "a52850f7-bfbb-567a-8c67-aba25d893ae5"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-coffee-vinyl-golden-yellow",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Coffee Vinyl Golden Yellow",
        "price": 34,
        "_id": "c9258409-d257-5294-8a6a-b8e6510945b4"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-doing-my-best-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Doing My Best Charcoal",
        "price": 39,
        "_id": "401d6840-e990-5fee-90a9-70d6adfda333"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-dont",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Dont",
        "price": 39,
        "_id": "16f110e5-908d-546a-8af3-db72c2f98643"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-drunk",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Drunk",
        "price": 39,
        "_id": "97a67a2c-2392-5fe6-9ce9-459c2e576b97"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-pencil-bike-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Pencil Bike Off-White",
        "price": 34,
        "_id": "cf891cd4-861f-56bb-b367-03b0a15ee2f1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-pencil-bike-burgundy",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Pencil Bike Burgundy",
        "price": 34,
        "_id": "43d065d3-e431-531c-9c76-375420da85e6"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-square-tires",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Square Tires",
        "price": 34,
        "_id": "2fdac558-d8d6-5ff7-924e-ca23f0e7906e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-universe-and-you",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Universe and You",
        "price": 39,
        "_id": "5e5e3a92-bac7-59ad-9a7f-ba6a04c3af64"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-stripes-mocha-brown",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Stripes Mocha Brown",
        "price": 39,
        "_id": "9672476b-a1e1-566c-ada5-a7d99c4ef12e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-video-retro-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Video Retro White",
        "price": 34,
        "_id": "f429455e-9004-5980-8e71-fdabe0ad4252"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-rainbow-bicycle-black",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Rainbow Bicycle Black",
        "price": 34,
        "_id": "74648da7-cf95-56e9-87fa-3e2cc78d8683"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-fluid-navy",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Fluid Navy",
        "price": 39,
        "_id": "9233f2f6-fd99-5821-ab70-18a7331f93bc"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-stripes-navy",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Stripes Navy",
        "price": 39,
        "_id": "8f866cf6-9a6b-5ad7-a43c-d130011330b8"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-cactus-sign-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Cactus Sign Charcoal",
        "price": 34,
        "_id": "c1b68db1-a64f-5342-a000-7095a4f537b2"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-morning-music-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Morning Music Charcoal",
        "price": 34,
        "_id": "14be5582-f9e9-5c7e-a304-4015386eebef"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-dedicated-logo-grey-melange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Dedicated Logo Grey Melange",
        "price": 29,
        "_id": "20669a48-3556-5f53-afd2-c1ac3bcb6b39"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-block-stripes-multi-color",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Block Stripes Multi Color",
        "price": 39,
        "_id": "713e1139-8d58-5006-b3cb-f2ab8f3c5d63"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-art-will-save-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Art Will Save Off-White",
        "price": 39,
        "_id": "de66ecd8-86e0-59b4-b3bc-69e5f1f0408f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-color-globe-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Color Globe Off-White",
        "price": 34,
        "_id": "ca17e8b3-410c-555b-9ce1-5863d3a5b011"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-cyclopath-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Cyclopath Off-White",
        "price": 34,
        "_id": "d7839e7b-de9c-57ac-a067-a0fdc5111f7f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-do-not-dance-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Do Not Dance Off-White",
        "price": 39,
        "_id": "325715ed-7663-5b86-a79b-cb835ae40c87"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-hummingbirds-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Hummingbirds Off-White",
        "price": 39,
        "_id": "f3aa2d8e-d2ca-511a-b757-39b4b8ef5057"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-morning-music-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Morning Music Off-White",
        "price": 34,
        "_id": "5b12f5b8-de03-54f8-a022-8cde20fa371f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-noodle-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Noodle Off-White",
        "price": 34,
        "_id": "3f267ed3-d9b9-501c-8bf6-c903a5924fed"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-rays-and-waves-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Rays and Waves Off-White",
        "price": 39,
        "_id": "e2baf53e-09aa-5795-b70d-76bdfdbd059f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-rule-the-world-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Rule the World Off-White",
        "price": 39,
        "_id": "7ea1e302-7ac7-5d16-8bb8-aa26a17277fe"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-simplicity-bike-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Simplicity Bike Off-White",
        "price": 34,
        "_id": "0084e036-9bce-50f5-a274-a44d507586df"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-the-roots-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm The Roots Off-White",
        "price": 34,
        "_id": "a7866107-28ec-5001-975e-01136d7185e0"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-bananas-yellow",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Bananas Yellow",
        "price": 39,
        "_id": "353c750b-1c4e-55e0-90d8-4b6cc84cc9db"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-feel-the-breeze-yellow",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Feel the Breeze Yellow",
        "price": 39,
        "_id": "eed5b927-65b7-59d9-aa08-3f76a6fe5670"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-local-planet-yellow",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Local Planet Yellow",
        "price": 34,
        "_id": "2c454db4-c485-56f4-872a-c5311e533dd1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-simplicity-bike-mint",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Simplicity Bike Mint",
        "price": 34,
        "_id": "f5cff563-79a1-5656-a824-ecfd3a419a41"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-slow-down-mint",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Slow Down Mint",
        "price": 39,
        "_id": "473f4043-a4d7-5ea3-85ac-5dd7c825e7bc"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-bananas-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Bananas White",
        "price": 39,
        "_id": "4ebe1e2d-da3b-5c6b-b5ab-485a927d2070"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-failure-success-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Failure Success White",
        "price": 39,
        "_id": "02239e8b-e9f6-5f70-b7c2-7248ddeacdb3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-sunset-palms-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Sunset Palms White",
        "price": 39,
        "_id": "95671e89-9468-59d9-b153-f959f6de0ba2"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-virtual-reality-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Virtual Reality White",
        "price": 39,
        "_id": "5a9b24ef-b616-5394-85ba-21e2c80d33f1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-black-birds",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Black Birds",
        "price": 39,
        "_id": "2ec5efcd-0c35-5519-beec-41afa618902a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-beige-safari",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Beige",
        "price": 29,
        "_id": "420621c1-8bf7-5b03-972f-50e5b6b1b7cf"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-orange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Orange",
        "price": 29,
        "_id": "c395553e-47db-567a-891a-a09d0734c614"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-new-tricks-grey-melange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm New Tricks Grey Melange",
        "price": 39,
        "_id": "668f78f1-e90e-5a7b-908d-6da5ea34adca"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-chanterelle-dark-green",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Chanterelle Dark Green",
        "price": 34,
        "_id": "3cec09da-37df-5321-af83-63f9b0999423"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-ikat-black",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Ikat Black",
        "price": 39,
        "_id": "b9f75332-6113-5596-a5fd-167c2510aaf7"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-local-planet-dark-green",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Local Planet Dark Green",
        "price": 34,
        "_id": "0e0476eb-aafe-53b7-b566-a46aedeeade7"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-marker-mountain-grey-melange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Marker Mountain Grey Melange",
        "price": 34,
        "_id": "2e81c862-30e0-5199-8190-796f302a8aca"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-marker-mountain-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Marker Mountain Off-White",
        "price": 34,
        "_id": "566ee7a7-ec8b-5620-b62c-89166ff02376"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-moose-sauna-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Moose Sauna Charcoal",
        "price": 39,
        "_id": "3eedd4df-2d02-5532-9385-f7d0616ff967"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-natural-high-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Natural High Off-White",
        "price": 34,
        "_id": "2a78d733-2c59-52fc-b996-a472d294c73f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-pong-pong-black",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Pong Pong Black",
        "price": 39,
        "_id": "f0227122-0107-5529-9db9-81357b71ba86"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-pong-pong-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Pong Pong White",
        "price": 39,
        "_id": "2962350e-2e8d-5d6c-9aa1-1b8dbced2738"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-stripes-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Stripes Charcoal",
        "price": 39,
        "_id": "b662e6ea-80b8-5714-9c50-5f678de683b4"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-stripes-dark-green",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Stripes Dark Green",
        "price": 39,
        "_id": "da996d42-0d42-56f1-b1b2-886bf439e1ba"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-trees-grey-melange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Trees Grey Melange",
        "price": 39,
        "_id": "cdf8b8f0-c263-5f4f-8bee-ffa8097614df"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-trees-navy",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Trees Navy",
        "price": 39,
        "_id": "53540805-ee3e-5aee-855e-9454064fadb2"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-vintage-mushroom-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Vintage Mushroom Off-White",
        "price": 34,
        "_id": "ecc23269-0ad7-5036-a769-a8b5331afbef"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-vinyl-retro-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Vinyl Retro Charcoal",
        "price": 34,
        "_id": "43fd238f-2844-545b-9829-3d9c3e4faca0"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-wild-at-heart-pink",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Wild At Heart Pink",
        "price": 34,
        "_id": "58680c22-1487-5e92-b090-a9bb19efaf9e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-blanks",
        "brand": "dedicated",
        "name": "T-SHIRT STOCKHOLM BLANKS",
        "price": 24,
        "_id": "7427779d-f1a2-5970-be7a-af6c28913a76"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-blanks-white",
        "brand": "dedicated",
        "name": "T-SHIRT STOCKHOLM BLANKS",
        "price": 24,
        "_id": "59def0ff-b023-5058-afb2-af0c12866dbd"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-blanks-charcoal",
        "brand": "dedicated",
        "name": "T-SHIRT STOCKHOLM BLANKS",
        "price": 24,
        "_id": "6bfcace4-119f-5fea-982f-863258305841"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-blanks-off-white",
        "brand": "dedicated",
        "name": "T-SHIRT STOCKHOLM BLANKS",
        "price": 24,
        "_id": "14ddbc9b-2a32-5d6c-9cfb-db80f91244a3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-blanks-sport_-grey_-melange",
        "brand": "dedicated",
        "name": "T-SHIRT STOCKHOLM BLANKS",
        "price": 24,
        "_id": "221906f0-60a2-5369-b3b7-0f30cdc45f1a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-blanks-black_-iris",
        "brand": "dedicated",
        "name": "T-SHIRT STOCKHOLM BLANKS",
        "price": 24,
        "_id": "462406c8-85e2-5a34-8e00-9dc051ceca60"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-dark-grey-melange-dark-heather",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Dark Grey Melange",
        "price": 29,
        "_id": "f738b8ce-840d-516f-8b24-eff0dd4d04cc"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-blue-melange-blue-melange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Blue Melange",
        "price": 29,
        "_id": "7a85621f-247f-5e91-a894-fb99465c7983"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-deep-blue-deep-blue",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Deep Blue",
        "price": 29,
        "_id": "c516c1f1-a075-521e-b6e0-6ed147ec340f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-dog-shapes-beige",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Dog Shapes Beige",
        "price": 24,
        "_id": "5892d834-be6a-5c2b-bc1d-9a1b6470ddc8"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-dog-shapes-grey-melange",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Dog Shapes Grey Melange",
        "price": 24,
        "_id": "cd3cc57c-4cab-51a3-b589-3f37587d60e7"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-mushrooms-black",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Mushrooms Black",
        "price": 24,
        "_id": "6a7e8ba3-ee58-573c-945a-92cb83627da3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-mushrooms-burgundy",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Mushrooms Burgundy",
        "price": 24,
        "_id": "5a6176fb-8399-5181-9f8f-6affc1ed1004"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-color-bike-mint",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Color Bike Mint",
        "price": 79,
        "_id": "7de8f9aa-3268-53cb-af27-54816e60d9f8"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-local-planet-mint",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Local Planet Mint",
        "price": 79,
        "_id": "c30c1df5-518f-53fc-9f45-307fe94c9a83"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-shark-bite-white",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Shark Bite White",
        "price": 24,
        "_id": "671c2844-8082-501d-a954-b4f88fc1819e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-trees-3-pack",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Trees 3-pack",
        "price": 59,
        "_id": "e1d8af00-2fe2-5152-8423-bed255bda224"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-trees-grey-melange",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Trees Grey Melange",
        "price": 24,
        "_id": "77469d14-0f1f-5f1d-9117-556f4e69cf99"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/pants-ljugarn-ikat-flannel-black",
        "brand": "dedicated",
        "name": "Pants Ljugarn Ikat Flannel Black",
        "price": 69,
        "_id": "df4c7681-4bd0-5900-928f-17297ee790b2"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/pants-sollentuna-corduroy-brown",
        "brand": "dedicated",
        "name": "Pants Sollentuna Corduroy Brown",
        "price": 99,
        "_id": "f47d1b5a-1e95-55e3-95c9-1d2b38e5c53b"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/pants-sollentuna-corduroy-deep-blue",
        "brand": "dedicated",
        "name": "Pants Sollentuna Corduroy Deep Blue",
        "price": 99,
        "_id": "a665dcb0-2730-522c-8996-4efb59c433ea"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/polo-shirt-vaxholm-burgundy",
        "brand": "dedicated",
        "name": "Polo Shirt Vaxholm Burgundy",
        "price": 59,
        "_id": "7ff7ce4f-e92e-55ce-b298-625c49eea312"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/polo-shirt-vaxholm-dark-green",
        "brand": "dedicated",
        "name": "Polo Shirt Vaxholm Dark Green",
        "price": 59,
        "_id": "27987a84-a5e2-5072-a811-19576dbbc295"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/polo-shirt-vaxholm-planet-icon-white",
        "brand": "dedicated",
        "name": "Polo Shirt Vaxholm Planet Icon White",
        "price": 59,
        "_id": "af921545-c33c-5420-b481-ffc328a0c55e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/puffer-jacket-dundret-burnt-orange",
        "brand": "dedicated",
        "name": "Puffer Jacket Dundret Burnt Orange",
        "price": 249,
        "_id": "2c9cbb4d-e0fa-5f8f-8b05-3e2ed325e4f3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/padded-jacket-vallentuna-corduroy-deep-blue",
        "brand": "dedicated",
        "name": "Padded Jacket Vallentuna Corduroy Deep Blue",
        "price": 149,
        "_id": "cb381c22-7b06-523f-9ca2-aea1e18f89e6"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/cardigan-molkom-dog-shapes-beige",
        "brand": "dedicated",
        "name": "Cardigan Molkom Dog Shapes Beige",
        "price": 99,
        "_id": "095802c5-65ac-5bbb-959e-8bc081c9c461"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/hoodie-falun-color-bike-grey-melange-grey_-melange",
        "brand": "dedicated",
        "name": "Hoodie Falun Color Bike Grey Melange",
        "price": 89,
        "_id": "c3343d1e-a845-5e30-991d-42933ffe896d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/jogger-lund-mushrooms-off-white",
        "brand": "dedicated",
        "name": "Jogger Lund Mushrooms Off-White",
        "price": 69,
        "_id": "940224a5-6513-5e15-bb3f-a0ab2a450522"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-mora-ikat-black",
        "brand": "dedicated",
        "name": "Sweater Mora Ikat Black",
        "price": 99,
        "_id": "4657bde6-a16d-51da-8033-8a312e7acc49"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/long-sleeve-t-shirt-hasle-stripes-charcoal",
        "brand": "dedicated",
        "name": "Long Sleeve T-shirt Hasle Stripes Charcoal",
        "price": 49,
        "_id": "68ad6a06-846a-522d-8a2f-91072cee8e35"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/hoodie-falun-local-planet-navy",
        "brand": "dedicated",
        "name": "Hoodie Falun Local Planet Navy",
        "price": 89,
        "_id": "ce475afa-22c3-5029-9a9c-0e73b54e4d56"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-trees",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Trees",
        "price": 24,
        "_id": "20af2871-00c2-576d-a1fb-c060463bc777"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/hoodie-falun-rainbow-bicycle-black",
        "brand": "dedicated",
        "name": "Hoodie Falun Rainbow Bicycle Black",
        "price": 89,
        "_id": "e3684207-c75f-5fe5-8847-09047a29c484"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-rainbow-bicycle-black",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Rainbow Bicycle Black",
        "price": 79,
        "_id": "5fa9ab5c-dc92-5830-b56a-cfc68816e216"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-base-pale-red",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Base Pale Red",
        "price": 59,
        "_id": "4c4b1374-9e32-542b-9b07-49c101e95d74"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-short-sleeve-marstrand-flying-hummingbirds-multi-color",
        "brand": "dedicated",
        "name": "Shirt Short Sleeve Marstrand Flying Hummingbirds Multi Color",
        "price": 79,
        "_id": "699b6b68-9bcd-5ad0-a4a1-9f2d96bed4bd"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-mora-stripe-multi-color",
        "brand": "dedicated",
        "name": "Sweater Mora Stripe Multi Color",
        "price": 89,
        "_id": "88511318-5a82-50d3-9cba-a1cca9a31fdd"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-short-sleeve-marstrand-seventies-floral-green",
        "brand": "dedicated",
        "name": "Shirt Short Sleeve Marstrand Seventies Floral Green",
        "price": 79,
        "_id": "0e8af1e6-1841-5c89-bbbf-cb409e2ab20c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/hoodie-falun-local-planet-grey-melange",
        "brand": "dedicated",
        "name": "Hoodie Falun Local Planet Grey Melange",
        "price": 89,
        "_id": "b950e534-d66d-5b73-8d1b-eeae08c8fe4c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-local-planet-grey-melange",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Local Planet Grey Melange",
        "price": 79,
        "_id": "8c92b089-bdad-5838-9676-f4e68c7124a8"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/chinos-sundsvall-khaki",
        "brand": "dedicated",
        "name": "Chinos Sundsvall Khaki",
        "price": 79,
        "_id": "42a71572-c941-5e62-92da-6ded01497f51"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-base-yellow",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Base Yellow",
        "price": 59,
        "_id": "28ffee38-9ab0-5c1e-9b39-05677317fa6a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-trysil-stripe-burnt-orange",
        "brand": "dedicated",
        "name": "Sweater Trysil Stripe Burnt Orange",
        "price": 99,
        "_id": "0330880c-2bd9-568a-84dd-5a76b332abe1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-trysil-stripe-navy",
        "brand": "dedicated",
        "name": "Sweater Trysil Stripe Navy",
        "price": 99,
        "_id": "8d8f2337-d91a-5aed-9354-b50db1acea55"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-base-beige",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Base Beige",
        "price": 59,
        "_id": "f96eb47b-f18f-5374-aef0-ef7a22c5b316"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-base-burgundy",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Base Burgundy",
        "price": 59,
        "_id": "84764558-9704-57e0-9211-b7520a75a1a4"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-base-dark-green",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Base Dark Green",
        "price": 59,
        "_id": "21005dd6-b402-569e-9d17-16c1385bf607"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-base-orange",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Base Orange",
        "price": 59,
        "_id": "90f7eb23-3503-5531-b312-c2e62dd9b86e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-chanterelle-dark-green",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Chanterelle Dark Green",
        "price": 79,
        "_id": "0a9f48cf-af3c-564b-98ad-7867b432fb2b"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-color-bike-charcoal",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Color Bike Charcoal",
        "price": 79,
        "_id": "9dd8e21f-cc73-546d-8779-75c725a22aa3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-local-planet-dark-green",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Local Planet Dark Green",
        "price": 79,
        "_id": "e4c4686b-666c-548f-a52a-60cb7a1fde80"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-mushroom-grey-melange",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Mushroom Grey Melange",
        "price": 79,
        "_id": "03a32ec5-2a61-502b-a72f-23bbe37dfc61"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-trysil-black",
        "brand": "dedicated",
        "name": "Sweater Trysil Black",
        "price": 99,
        "_id": "363f300c-47f4-5bd5-b6d7-4aabad19a706"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-mora-dog-shapes-beige",
        "brand": "dedicated",
        "name": "Sweater Mora Dog Shapes Beige",
        "price": 89,
        "_id": "deed4675-7dde-5ce4-b47f-31f08dcfdd96"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-rute-ikat-flannel-black",
        "brand": "dedicated",
        "name": "Shirt Rute Ikat Flannel Black",
        "price": 79,
        "_id": "4dfdddf6-d9a2-5782-8de0-82fea8fa511e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-rute-ikat-flannel-navy",
        "brand": "dedicated",
        "name": "Shirt Rute Ikat Flannel Navy",
        "price": 79,
        "_id": "bbbe9c29-648b-5c50-b74f-bfbf6c5aa0c3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-varberg-burgundy",
        "brand": "dedicated",
        "name": "Shirt Varberg Burgundy",
        "price": 69,
        "_id": "db665203-12b2-5386-939d-cd1640d13cce"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-varberg-corduroy-brown",
        "brand": "dedicated",
        "name": "Shirt Varberg Corduroy Brown",
        "price": 79,
        "_id": "972918d8-190d-53da-974d-7de3a8f7fb7d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-karlskrona-transfer-knit-dark-green",
        "brand": "dedicated",
        "name": "Sweater Karlskrona Transfer Knit Dark Green",
        "price": 99,
        "_id": "04b7da80-73a3-5f5d-9b29-76da4b9aa28f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-mora-cut-mountain-grey",
        "brand": "dedicated",
        "name": "Sweater Mora Cut Mountain Grey",
        "price": 89,
        "_id": "9d2878a4-7160-5fa1-b121-ca340fcfed4c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-mora-cut-mountain-multi-color",
        "brand": "dedicated",
        "name": "Sweater Mora Cut Mountain Multi Color",
        "price": 89,
        "_id": "dc2b87a1-39a4-5f7d-8550-811750c4776c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-color-bike-gm",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Color Bike Grey Melange",
        "price": 79,
        "_id": "72116661-abd5-55e3-a339-8a6c6bfbecfc"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-local-planet-navy",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Local Planet Navy",
        "price": 79,
        "_id": "c75a545d-5d62-58aa-9857-194035a57fc7"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-short-sleeve-gnesta-black",
        "brand": "dedicated",
        "name": "Sweater Short Sleeve Gnesta Black",
        "price": 69,
        "_id": "e46cb721-07b7-573e-b8b9-774af1d9ba8d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-split-grey",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Split Grey",
        "price": 79,
        "_id": "ba33aae8-18d1-5621-b84b-796cf89bc3b8"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-varberg-corduroy-leaf-green",
        "brand": "dedicated",
        "name": "Shirt Varberg Corduroy Leaf Green",
        "price": 79,
        "_id": "afd4a45b-a318-50a5-92f1-446424e5a17b"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/hoodie-falun-dedicated-logo-black",
        "brand": "dedicated",
        "name": "Hoodie Falun Dedicated Logo Black",
        "price": 69,
        "_id": "47776bbb-9216-5ea8-90d8-4e1a0c3cfa71"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/hoodie-falun-dedicated-logo-grey-melange",
        "brand": "dedicated",
        "name": "Hoodie Falun Dedicated Logo Grey Melange",
        "price": 69,
        "_id": "d635baec-e0c4-5b2f-9593-7e4c50de37b1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-dedicated-logo-grey-melange",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Dedicated Logo Grey Melange",
        "price": 59,
        "_id": "c5c68ace-08c5-5ea0-8e17-5567222f331d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-dedicated-logo-black",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Dedicated Logo Black",
        "price": 59,
        "_id": "ab19763b-a5a9-527d-a626-3fdcfef96cd4"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-text-bike",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Text Bike",
        "price": 69,
        "_id": "ae41ad8c-e79a-5dd4-a420-4bd76507de21"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shorts-vejle-thin-stripes",
        "brand": "dedicated",
        "name": "Shorts Vejle Thin Stripes",
        "price": 69,
        "_id": "36a1a68c-9fdd-501c-aec6-41deaab0bad3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-gustavsberg-black",
        "brand": "dedicated",
        "name": "T-shirt Gustavsberg Black",
        "price": 49,
        "_id": "20b2d31f-7a3f-5579-9b4e-716117b2adcf"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-gustavsberg-white",
        "brand": "dedicated",
        "name": "T-shirt Gustavsberg White",
        "price": 49,
        "_id": "b6d4dbb9-1a4f-5170-8535-3ff08e5a4d7b"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-dark-green",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Dark Green",
        "price": 29,
        "_id": "4f5554cd-3d3f-5d94-8c4f-d9abe70c16b0"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-bike-front-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Bike Front Charcoal",
        "price": 34,
        "_id": "f9526b15-94a9-5c0f-85c3-acbd208d9413"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-closing-time",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Closing Time",
        "price": 39,
        "_id": "3cbf0046-cedb-52b9-bbed-2cbd47275026"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-3-pack-multi-color",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base 3-pack",
        "price": 59,
        "_id": "6e12fe68-ef6f-5a12-8a27-3051fd7a03c5"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-3-pack-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base 3-pack",
        "price": 59,
        "_id": "d9c63b62-5c2f-5deb-a2a5-0955b3e0861a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-3-pack",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base 3-pack",
        "price": 59,
        "_id": "1551659d-27ba-5d68-a8f8-80b0ad359b0d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-navy",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Navy",
        "price": 29,
        "_id": "0a2693cc-80b2-5b3f-854e-3df567239d2d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-badminton",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Badminton Pale Yellow",
        "price": 39,
        "_id": "a2b8a7c3-cef6-5c52-8cc0-f9a5bf72d740"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-mint-surf_-spray",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Mint",
        "price": 29,
        "_id": "aa5f8f28-a826-5a01-9144-cc8a8b6989c4"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-chainsaw-shopping-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Chainsaw Shopping Off-White",
        "price": 39,
        "_id": "0c4599b5-ec51-5ddf-8dd0-d0630344c77f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base White",
        "price": 29,
        "_id": "0ad298ef-4f0f-53e0-8673-7928eea9954b"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-black",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Black",
        "price": 29,
        "_id": "650bf784-d292-5b5a-8391-5fc9eafb5ab8"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-grey-melange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Grey Melange",
        "price": 29,
        "_id": "5984ef91-0eed-5404-ab53-ae78527f73e3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-3-pack-white-black",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base 3-pack",
        "price": 59,
        "_id": "4bffbe10-928c-50ab-bf2c-f5f0a3831d20"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-off-white",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Off-White",
        "price": 29,
        "_id": "2d8106bb-6602-56b5-aa87-acfe42ab2d03"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-good-and-you-burgundy",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Good and You Burgundy",
        "price": 34,
        "_id": "3c52f439-7c3b-5531-9d67-e1c5ca40db2d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-base-charcoal",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Base Charcoal",
        "price": 29,
        "_id": "bbe71b32-555d-5b3f-a0f2-958593aa4f34"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-base-black-5-pack",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Base Black 5-pack",
        "price": 79,
        "_id": "8b61247c-5f8b-59ba-9d7d-fa7e31a229ee"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-base-5-pack",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Base 5-pack",
        "price": 79,
        "_id": "643a941b-d214-53fa-b142-5a2f1c8753ef"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-base-black",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Base Black",
        "price": 59,
        "_id": "1189a5f2-e692-54bf-b26d-185fd1ae729b"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-base-grey-melange",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Base Grey Melange",
        "price": 59,
        "_id": "fd0fb68f-b4ec-5303-8ca3-dfbb53e6689d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-base-charcoal",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Base Charcoal",
        "price": 59,
        "_id": "c8e15474-81bc-5a99-b38d-410cc6a1f635"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/polo-shirt-vaxholm-black",
        "brand": "dedicated",
        "name": "Polo Shirt Vaxholm Black",
        "price": 59,
        "_id": "b402c33b-482e-5f3c-88e0-93b72eb233a8"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/polo-shirt-vaxholm-white",
        "brand": "dedicated",
        "name": "Polo Shirt Vaxholm White",
        "price": 59,
        "_id": "5a7ae2a7-9a34-5fbb-b062-70fc2b1fb8ce"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweatshirt-malmoe-base-mint",
        "brand": "dedicated",
        "name": "Sweatshirt Malmoe Base Mint",
        "price": 59,
        "_id": "f89546c2-227c-5e76-b701-15e17dfbb543"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/joggers-lund-dedicated-logo-black",
        "brand": "dedicated",
        "name": "Joggers Lund Dedicated Logo Black",
        "price": 59,
        "_id": "09fc6bfa-bea3-5ba2-938b-d3d56feaedc6"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/joggers-lund-dedicated-logo-grey-melange",
        "brand": "dedicated",
        "name": "Joggers Lund Dedicated Logo Grey Melange",
        "price": 59,
        "_id": "ca24fe12-f4f4-5a9a-8b61-c1c5692b9af8"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-black",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Base Black",
        "price": 19,
        "_id": "c73bd160-0678-5e7c-9d1f-a0b74c1d83aa"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-base-navy-black_-iris",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Base Navy",
        "price": 19,
        "_id": "6ebffa75-7ff3-553f-bc64-f238cc3cc96e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-base-burgundy",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Base Burgundy",
        "price": 19,
        "_id": "db671589-f6a5-5808-af65-f0359b23636a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-karlskrona-transfer-knit-black",
        "brand": "dedicated",
        "name": "Sweater Karlskrona Transfer Knit Black",
        "price": 99,
        "_id": "79049114-c620-5edd-9720-7bc8e6454a1e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-karlskrona-transfer-knit-light-grey",
        "brand": "dedicated",
        "name": "Sweater Karlskrona Transfer Knit Light Grey",
        "price": 99,
        "_id": "8687a73a-c419-544f-a480-07abef29ac7a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/short-sleeve-knitted-t-shirt-husum-denim-blue",
        "brand": "dedicated",
        "name": "Short Sleeve Knitted T-shirt Husum Denim Blue",
        "price": 59,
        "_id": "281769ce-2d86-5f33-9131-61521cfe4cc2"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/short-sleeve-knitted-t-shirt-husum-mint",
        "brand": "dedicated",
        "name": "Short Sleeve Knitted T-shirt Husum Mint",
        "price": 59,
        "_id": "cf69db71-1e35-5c51-bc3b-5aa97ab1bdbd"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-varberg-corduroy-black",
        "brand": "dedicated",
        "name": "Shirt Varberg Corduroy Black",
        "price": 79,
        "_id": "fbf24255-4203-5e20-aa1f-53b7f0df5938"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/jacket-leksand-black",
        "brand": "dedicated",
        "name": "Jacket Leksand Black",
        "price": 129,
        "_id": "1dd33870-f1a8-5a73-9efc-013db49ba842"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/jacket-leksand-olive-green",
        "brand": "dedicated",
        "name": "Jacket Leksand Olive Green",
        "price": 119,
        "_id": "6bc61dc0-5164-59f9-b09c-9dc14a7e21c0"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-varberg-dobby-off-white",
        "brand": "dedicated",
        "name": "Shirt Varberg Dobby Off-White",
        "price": 89,
        "_id": "7505d240-d792-5af3-9924-35cc410125e1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-varberg-chambray-blue",
        "brand": "dedicated",
        "name": "Shirt Varberg Chambray",
        "price": 69,
        "_id": "5cc0e3a1-abe9-5685-a54e-d0391067bfcf"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-varberg-black",
        "brand": "dedicated",
        "name": "Shirt Varberg Black",
        "price": 69,
        "_id": "d10faded-8ce8-5b41-825d-abdfac7261d5"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-varberg-navy",
        "brand": "dedicated",
        "name": "Shirt Varberg Navy",
        "price": 69,
        "_id": "cb6c7cb7-2bee-511e-bc70-a4c1ee751980"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-varberg-dobby-navy",
        "brand": "dedicated",
        "name": "Shirt Varberg Dobby Navy",
        "price": 89,
        "_id": "46552eda-77eb-5373-8a87-a006eba97697"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-short-sleeve-sandefjord-dobby-off-white",
        "brand": "dedicated",
        "name": "Shirt Short Sleeve Sandefjord Dobby Off White",
        "price": 79,
        "_id": "5a2bc60f-dbfb-5bf1-b8b8-da9804a2a8ee"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-short-sleeve-sandefjord-dobby-navy",
        "brand": "dedicated",
        "name": "Shirt Short Sleeve Sandefjord Dobby Navy",
        "price": 79,
        "_id": "55997e96-79de-5600-9d26-a66aac51f998"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-varberg-paisley",
        "brand": "dedicated",
        "name": "Shirt Varberg Paisley",
        "price": 89,
        "_id": "b616dfe5-08b8-5fbf-8e47-cd5e3d724fe5"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shirt-varberg-off-white",
        "brand": "dedicated",
        "name": "Shirt Varberg Off-White",
        "price": 69,
        "_id": "c1e08e06-5be1-5269-89b0-bfe21055e1fc"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/pants-sollentuna-corduroy-black",
        "brand": "dedicated",
        "name": "Pants Sollentuna Corduroy Black",
        "price": 99,
        "_id": "16a9507b-a7f4-5375-a2f3-42bf211e34f4"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/chino-pants-sundsvall-navy-black_-iris",
        "brand": "dedicated",
        "name": "Chino Pants Sundsvall Navy",
        "price": 79,
        "_id": "6fceb454-92db-5967-a005-a59b6109728a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/chino-pants-sundsvall-black-black",
        "brand": "dedicated",
        "name": "Chino Pants Sundsvall Black",
        "price": 79,
        "_id": "2aea51e8-c317-5c8f-943e-bc3d2737c5cb"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/chinos-sundsvall-leaf-green",
        "brand": "dedicated",
        "name": "Chinos Sundsvall Leaf Green",
        "price": 79,
        "_id": "da16d3f6-ae8c-54c8-ac7c-d2f1b751ee6d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/pants-klitmoeller-black",
        "brand": "dedicated",
        "name": "Pants Klitmoeller Black",
        "price": 79,
        "_id": "e4be909e-11c1-5fa5-884d-11d44681ab35"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/pants-lerum-olive-green",
        "brand": "dedicated",
        "name": "Pants Lerum Olive Green",
        "price": 89,
        "_id": "951ac32a-eac4-52d6-9dc3-5d15a95ec198"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/pants-lerum-black-black",
        "brand": "dedicated",
        "name": "Pants Lerum Black",
        "price": 89,
        "_id": "b9c0e6c9-4d7a-5d13-bf17-7075de87c84f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/joggers-lund-dedicated-logo-charcoal",
        "brand": "dedicated",
        "name": "Joggers Lund Dedicated Logo Charcoal",
        "price": 59,
        "_id": "438b2f6d-cf88-5078-9fd3-9cf9388ebe70"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/chino-shorts-nacka-olive-green",
        "brand": "dedicated",
        "name": "Chino Shorts Nacka Olive Green",
        "price": 69,
        "_id": "10fcce2f-d05e-5c59-8437-2fa130dc22fe"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/chino-shorts-nacka-black-black",
        "brand": "dedicated",
        "name": "Chino Shorts Nacka Black",
        "price": 69,
        "_id": "5b74d308-06ed-5ba3-9fca-311dc07448ff"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/shorts-vejle-black",
        "brand": "dedicated",
        "name": "Shorts Vejle Black",
        "price": 69,
        "_id": "240b96f1-f755-5d3a-a607-31684f3da7d7"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/chino-shorts-nacka-burgundy",
        "brand": "dedicated",
        "name": "Chino Shorts Nacka",
        "price": 69,
        "_id": "5530bb11-f8f7-54c3-99a8-1aed4a6bf341"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/puffer-jacket-dundret-leaf-green",
        "brand": "dedicated",
        "name": "Puffer Jacket Dundret Leaf Green",
        "price": 249,
        "_id": "6717e2e9-93f0-5c4f-a3c1-960eaa1c806a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/puffer-jacket-dundret-black",
        "brand": "dedicated",
        "name": "Puffer Jacket Dundret Black",
        "price": 249,
        "_id": "910bb0fc-9ec8-5fec-9455-0dfa07a0e77a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/padded-jacket-vallentuna-corduroy-black",
        "brand": "dedicated",
        "name": "Padded Jacket Vallentuna Corduroy Black",
        "price": 149,
        "_id": "a97a875c-ffbb-5608-a675-d56f44dcf005"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/jacket-hoddevik-black",
        "brand": "dedicated",
        "name": "Jacket Hoddevik Black",
        "price": 199,
        "_id": "1748e981-214a-5c3f-85e5-5d1fb383fdf8"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/jacket-hoddevik-beige",
        "brand": "dedicated",
        "name": "Jacket Hoddevik Beige",
        "price": 199,
        "_id": "ae724943-7be1-5875-a8c6-aeb5edb3fa19"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/jacket-hoddevik-split-multi-color",
        "brand": "dedicated",
        "name": "Jacket Hoddevik Split Multi Color",
        "price": 199,
        "_id": "da12f6b2-25fa-5b31-80ff-99dc7f9e81c6"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/jacket-hoddevik-leaf-green",
        "brand": "dedicated",
        "name": "Jacket Hoddevik Leaf Green",
        "price": 199,
        "_id": "98fba131-2314-577e-b0fb-958c848aa357"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/windbreaker-skara-black-black",
        "brand": "dedicated",
        "name": "Windbreaker Skara Black",
        "price": 99,
        "_id": "4190aed8-0ebc-5b46-8e65-d7793c214b9a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/beanie-narvik-black",
        "brand": "dedicated",
        "name": "Beanie Narvik Black",
        "price": 39,
        "_id": "c7924e02-807b-55f6-a59b-fa90a9a0b46d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/unconstructed-cap-globe-black",
        "brand": "dedicated",
        "name": "Unconstructed Cap Globe Black",
        "price": 34,
        "_id": "b717239e-f623-5869-a7bc-5d3a322edfe0"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/unconstructed-cap-globe-white",
        "brand": "dedicated",
        "name": "Unconstructed Cap Globe White",
        "price": 34,
        "_id": "5bec7e77-a692-5c2a-b220-8b9e6ce80b5c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sport-cap-dedicated-logo-black",
        "brand": "dedicated",
        "name": "Sport Cap Dedicated Logo Black",
        "price": 34,
        "_id": "fd61d866-1fa0-5981-af03-a56eb484f52a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sport-cap-palm-black",
        "brand": "dedicated",
        "name": "Sport Cap Palm Black",
        "price": 34,
        "_id": "d8f54148-a573-59cc-b069-9a549d17322b"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sport-cap-tie-dye-logo-line-multi-color",
        "brand": "dedicated",
        "name": "Sport Cap Tie Dye Logo Line Multi Color",
        "price": 34,
        "_id": "2307d3a1-61ff-52d7-a075-93bcb9748c4f"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/bucket-hat-dedicated-logo-white",
        "brand": "dedicated",
        "name": "Bucket Hat Dedicated Logo White",
        "price": 39,
        "_id": "ba173dbe-a305-5129-9d82-16256acf9ba3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sport-cap-globe-navy",
        "brand": "dedicated",
        "name": "Sport Cap Globe Navy",
        "price": 34,
        "_id": "28f2eb90-5fc0-5798-a418-3cf069cf3f9a"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sport-cap-globe-black",
        "brand": "dedicated",
        "name": "Sport Cap Globe Black",
        "price": 34,
        "_id": "93d48958-137f-5f8e-9184-4bd891e8f3a9"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-bike-pattern-3-pack",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Bike Pattern 3-pack",
        "price": 59,
        "_id": "6508e4c3-e752-53d0-9a8a-82efa0601cc2"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-bananas-3-pack",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Bananas 3-pack",
        "price": 59,
        "_id": "5b2e0bb3-3ef0-54cb-8588-12460084cac7"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-white",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Base White",
        "price": 19,
        "_id": "52dc5110-6000-57f2-9146-e6025ffacc9d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-bike-pattern-navy-black_-iris",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Bike Pattern Navy",
        "price": 24,
        "_id": "857d289a-18e2-57c5-a1c4-a23ca7d3c28d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-bike-pattern-burgundy",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Bike Pattern Burgundy",
        "price": 24,
        "_id": "bbfa3994-cb9b-5b3d-8b09-5bf17e5f77ae"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-bike-pattern-black",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Bike Pattern Black",
        "price": 24,
        "_id": "60e33c69-8791-5beb-9dda-68201ebe9ff3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-bananas-white",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Bananas White",
        "price": 24,
        "_id": "8244b225-2766-5af1-acdd-da9538503023"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-bananas-pink",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Bananas Pink",
        "price": 24,
        "_id": "23690f00-9f3f-5b42-9b0e-faad20013ce6"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-lemons",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Lemons",
        "price": 24,
        "_id": "615ec72a-7253-51ed-bc5e-7e351d258dc9"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/boxer-briefs-kalix-fuck-racism",
        "brand": "dedicated",
        "name": "Boxer Briefs Kalix Fuck Racism",
        "price": 24,
        "_id": "048e54ca-0db1-553c-9065-7ea29a8f459c"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/tote-bag-lycksele-leaf-green",
        "brand": "dedicated",
        "name": "Tote Bag Lycksele Leaf Green",
        "price": 29,
        "_id": "16c2ebcb-8826-5008-bbb9-c532ded17e3d"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/tote-bag-lycksele-golden-yellow",
        "brand": "dedicated",
        "name": "Tote Bag Lycksele Golden Yellow",
        "price": 29,
        "_id": "03a8b983-85eb-5125-b5c0-6a505b146b0e"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/tote-bag-torekov-local-planet-off-white",
        "brand": "dedicated",
        "name": "Tote Bag Torekov Local Planet Off-White",
        "price": 9,
        "_id": "8d940a69-0f4c-52ce-acfa-e89b8e3e35f1"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/tote-bag-torekov-peas-and-love-off-white",
        "brand": "dedicated",
        "name": "Tote Bag Torekov Peas And Love Off-White",
        "price": 9,
        "_id": "b3c5b2f1-7a81-569a-a498-98824234dd52"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/tote-bag-torekov-love-mother",
        "brand": "dedicated",
        "name": "Tote Bag Torekov Love Mother",
        "price": 9,
        "_id": "ea23396b-9c0e-5fa9-85bf-7688d04f8ca0"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/tote-bag-torekov-doing-my-best",
        "brand": "dedicated",
        "name": "Tote Bag Torekov Doing My Best",
        "price": 9,
        "_id": "ef9fd213-0663-5c93-828b-d89b610435da"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/t-shirt-stockholm-mushroom-grey-melange",
        "brand": "dedicated",
        "name": "T-shirt Stockholm Mushroom Grey Melange",
        "price": 34,
        "_id": "bf3975fa-571d-5a04-beaa-3c31ca3311e3"
      },
      {
        "link": "https://www.dedicatedbrand.com/en/men/all-men/sweater-mora-snoopy-puffer-dark-stripe",
        "brand": "dedicated",
        "name": "Sweater Mora Snoopy Puffer Dark Stripe",
        "price": 89,
        "_id": "aa28cbfa-0837-52c1-b286-0fab9deb200f"
      },
      {
        "link": "undefined",
        "brand": "adresse",
        "name": "",
        "price": null,
        "_id": "6e789c0a-7055-5ec6-b18e-e2285ddabdb5"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4217-manteau-technique-elon-1300000262576.html",
        "brand": "adresse",
        "name": "Imperméable Elon Crossover",
        "price": 449,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d773eb8a-9a5b-5acd-8076-cb39b2101e2c"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4519-gilet-warren-sans-manche-3701480706266.html",
        "brand": "adresse",
        "name": "Gilet sans manches Warren réversible",
        "price": 199,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "ab74790b-d5b7-541b-87d4-fe7116adf317"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4502-coach-jacket-billy-warm-3701480706365.html",
        "brand": "adresse",
        "name": "Coach jacket Billy Warm",
        "price": 265,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "a5068272-07b2-5bb7-b1e0-78fb472ef836"
      },
      {
        "link": "https://adresse.paris/accessoires/4529-bonnet-roy-3701480706648.html",
        "brand": "adresse",
        "name": "Bonnet Roy vert",
        "price": 50,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "2a0df48e-7b9e-5f5a-ac45-61ee6776f833"
      },
      {
        "link": "https://adresse.paris/pantalons/4250-chinos-thomas-1300000265812.html",
        "brand": "adresse",
        "name": "Chino Thomas beige",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c4ce3dda-a66b-541f-923a-0246d044e977"
      },
      {
        "link": "https://adresse.paris/chemises/4513-odeon-flanelle-coton-ea-3701480705634.html",
        "brand": "adresse",
        "name": "Chemise Odéon en flanelle grise",
        "price": 95,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "3e4241c2-241b-56ee-b308-89868038454a"
      },
      {
        "link": "https://adresse.paris/home/3968-blouson-gallion-1300000257800.html",
        "brand": "adresse",
        "name": "Teddy Gallion taupe",
        "price": 169,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "448b251e-e77e-5526-9a74-343c22a8bf10"
      },
      {
        "link": "https://adresse.paris/accessoires/4530-bonnet-roy-3701480706631.html",
        "brand": "adresse",
        "name": "Bonnet Roy bordeaux",
        "price": 50,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d52d1995-3887-5ebe-b041-c23cc8f983a7"
      },
      {
        "link": "undefined",
        "brand": "adresse",
        "name": "",
        "price": null,
        "_id": "6e789c0a-7055-5ec6-b18e-e2285ddabdb5"
      },
      {
        "link": "https://adresse.paris/chemises/4531-sur-chemise-menilmontant-3701480706211.html",
        "brand": "adresse",
        "name": "Sur-chemise Menilmontant rouge",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "1e37ef50-5f24-5dea-b2a5-a893dbfa3073"
      },
      {
        "link": "https://adresse.paris/chaussettes-bonnets/4427-chaussettes-anglet-3701480704194.html",
        "brand": "adresse",
        "name": "Chaussettes Anglet motifs écailles \"Seigaiha\" à l'unité",
        "price": 9,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "356d9498-4f1f-5d6a-917e-933b3f4a5dd2"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4185-t-shirt-valdes-1300000259675.html",
        "brand": "adresse",
        "name": "T-shirt Valdes blanc et bleu",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "56f2f57e-c0fc-53ac-a3c9-ac0f41ad3bb6"
      },
      {
        "link": "https://adresse.paris/pantalons/4370-chinos-thomas-3701480700134.html",
        "brand": "adresse",
        "name": "Chino Thomas camel",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "ed784bf9-9733-5cda-929b-5a12e03e898d"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4518-gilet-warren-sans-manches-3701480706310.html",
        "brand": "adresse",
        "name": "Gilet sans manches Warren réversible",
        "price": 199,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "5081e9d8-2b4d-52ad-8eda-e7ebb8adde8d"
      },
      {
        "link": "https://adresse.paris/chemises/4532-sur-chemise-menilmontant-3701480706167.html",
        "brand": "adresse",
        "name": "Sur-chemise Menilmontant jaune",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "07a53e24-a305-5220-aef7-6c4dfb4599fa"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4478-sweats-jaures-3701480704583.html",
        "brand": "adresse",
        "name": "Sweatshirt Jaurès moutarde",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "62360eae-0a42-5761-b909-aeedfd9d7b9f"
      },
      {
        "link": "https://adresse.paris/pantalons/4369-chinos-thomas-3701480700257.html",
        "brand": "adresse",
        "name": "Chino Thomas gris",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c4797aee-69bc-548d-9f52-127c7bc85fb3"
      },
      {
        "link": "https://adresse.paris/pantalons/4246-chinos-thomas-1300000266291.html",
        "brand": "adresse",
        "name": "",
        "price": null,
        "_id": "54f8e179-af1d-5f8a-b0dd-c602c12f0efe"
      },
      {
        "link": "https://adresse.paris/pantalons/4368-chinos-thomas-3701480700370.html",
        "brand": "adresse",
        "name": "Chino Thomas gris bleu",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "70dcfa81-814d-5d34-af6d-e6b00826b7b8"
      },
      {
        "link": "https://adresse.paris/pantalons/4245-chinos-thomas-1300000266413.html",
        "brand": "adresse",
        "name": "Chino Thomas noir",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "ee3f1cc5-bfa3-510b-a585-29be05ea6ba4"
      },
      {
        "name": "Gilet sans manches Warren réversible",
        "link": "https://adresse.paris/manteaux-et-blousons/4420-gilet-warren-reversible-3701480703173.html",
        "brand": "adresse",
        "price": 199,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "e9e289c7-cb9a-505f-b059-beda9dfc22f4"
      },
      {
        "link": "https://adresse.paris/pantalons/4127-jean-tight-elasthane-ubranded-1300000260534.html",
        "brand": "adresse",
        "name": "Jean Unbranded Noir 99% coton",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6c6ce884-8b86-5f27-b5cd-9a4e2513e08f"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4477-sweats-jaures-3701480704545.html",
        "brand": "adresse",
        "name": "Sweat Jaurès kaki",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "387a4a8d-4ddf-55a0-b304-1e14bdf6ef52"
      },
      {
        "link": "https://adresse.paris/home/3970-blouson-gallion-1300000257688.html",
        "brand": "adresse",
        "name": "Teddy Gallion beige",
        "price": 169,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "f5225e1d-4610-58cf-8d3b-f602ea58dbb4"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/3969-blouson-gallion-1300000257749.html",
        "brand": "adresse",
        "name": "Teddy Gallion kaki déperlant",
        "price": 189,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "f2329243-2044-57a7-b997-fc3570f10f27"
      },
      {
        "link": "https://adresse.paris/chemises/4215-chemise-odeon-recytech-1300000264648.html",
        "brand": "adresse",
        "name": "Chemise Odéon recytech rayures bleues",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "689c53ee-4e84-52bf-bbf3-987d14ddc637"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/3895-t-shirt-villette-1300000238342.html",
        "brand": "adresse",
        "name": "T-shirt Villette gris",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "fa0c1030-8267-50ac-86c1-b6becca8528a"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4251-sweatshirt-jaures-1300000262088.html",
        "brand": "adresse",
        "name": "Sweatshirt Jaurès à rayures marines",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "1e5dd5a5-1846-56f7-b7e7-179db2c9b38e"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4317-t-shirt-villette-1300000282475.html",
        "brand": "adresse",
        "name": "T-shirt Villette kaki",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "f2539628-4558-5d44-861b-6be700b36699"
      },
      {
        "link": "https://adresse.paris/chemises/4241-sur-chemise-roquette-1300000265768.html",
        "brand": "adresse",
        "name": "Sur-chemise Roquette kaki",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "22f84703-b7da-5e64-a86a-acda7e6afede"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4157-pull-a-col-rond-monceau-1300000257503.html",
        "brand": "adresse",
        "name": "Pull Monceau Sauge",
        "price": 79,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c7d39017-2cd9-5159-81ac-896506f39223"
      },
      {
        "link": "https://adresse.paris/chemises/4460-sur-chemise-roquette-3701480704088.html",
        "brand": "adresse",
        "name": "Sur-chemise Roquette marine",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "02e30632-b6b3-5938-89c3-f30146c8bf3c"
      },
      {
        "link": "https://adresse.paris/pantalons/4356-pantalon-phil-anthracite-1300000283625.html",
        "brand": "adresse",
        "name": "Pantalon Phil anthracite",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "12f9a1ea-4b5d-5bd0-b752-c8440d2e7b1d"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4177-manteau-soufflot-1300000258043.html",
        "brand": "adresse",
        "name": "Mackintosh Soufflot kaki",
        "price": 239,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "479285c1-582d-52bc-b3e8-95f09a50853d"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4236-saint-victor-merinos-1300000262392.html",
        "brand": "adresse",
        "name": "Pull Saint Victor vert",
        "price": 110,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b8a97244-d8a8-5cab-8443-4330c45765ea"
      },
      {
        "link": "https://adresse.paris/content/1-livraison",
        "brand": "adresse",
        "name": "",
        "price": null,
        "_id": "d689ff1a-2668-5382-a8fe-4874bd5adb27"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4235-blouson-supakitch-1300000266758.html",
        "brand": "adresse",
        "name": "Blouson polaire Seine ADRESSE x SupaKitch (collaboration)",
        "price": 219,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "adac8522-755f-54e2-8273-c577abf9e788"
      },
      {
        "link": "https://adresse.paris/accessoires/4474-echarpe-saint-sulpice-3701480705269.html",
        "brand": "adresse",
        "name": "Echarpe Saint-Sulpice bordeaux",
        "price": 65,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b49e224f-ab9c-5d5f-a7c6-9f37abad845e"
      },
      {
        "link": "https://adresse.paris/chemises/4514-odeon-flanelle-coton-ea-3701480705580.html",
        "brand": "adresse",
        "name": "Chemise Odéon en flanelle anthracite",
        "price": 95,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "5977fc3b-3f32-55cb-b181-69a297fbaeb2"
      },
      {
        "link": "https://adresse.paris/derniere-chance/4145-chemise-odeon-1300000256841.html",
        "brand": "adresse",
        "name": "Chemise Odéon bleue ciel",
        "price": 48,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "1580b612-bd25-519d-b3f5-0364eebce36d"
      },
      {
        "link": "https://adresse.paris/pantalons/4487-pantalon-fleming-warm-3701480704798.html",
        "brand": "adresse",
        "name": "Pantalon Fleming warm marine",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "238be6e3-ea56-5de0-bc07-a989f72ec0b9"
      },
      {
        "link": "https://adresse.paris/chemises/4357-chemise-chaillot-1300000283809.html",
        "brand": "adresse",
        "name": "Chemise Chaillot à rayures bleues",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "edfd29c4-d118-5d52-bd2b-c4add16ef41d"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/3819-blouson-neil-1300000256209.html",
        "brand": "adresse",
        "name": "Blouson Neil",
        "price": 299,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "871c18a0-6884-5a41-aa0c-a51957f485ce"
      },
      {
        "link": "https://adresse.paris/home/3889-blouson-tolbiac-1300000248501.html",
        "brand": "adresse",
        "name": "Veste Tolbiac",
        "price": 179,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "55481c82-22d7-54cd-a045-74e044c7121a"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4393-t-shirt-valdes-3701480702077.html",
        "brand": "adresse",
        "name": "T-shirt Valdes blanc et vert",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "dcd39f77-c6b7-50c9-b3c0-ed9b3dde5a8a"
      },
      {
        "link": "https://adresse.paris/chemises/4527-chemise-odeon-en-flanelle-3701480705801.html",
        "brand": "adresse",
        "name": "Chemise Odéon en flanelle grise",
        "price": 95,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "a506fe7e-7a79-5347-9863-3d88814099c8"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4429-t-shirt-saint-ouen-3701480703340.html",
        "brand": "adresse",
        "name": "T-shirt Saint-Ouen en coton à rayures anthracites",
        "price": 45,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "02db75ec-ee9c-594c-a04c-001aa9f8833e"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4354-sweatshirt-zippe-pernety-1300000283724.html",
        "brand": "adresse",
        "name": "Sweatshirt zippé Pernety anthracite",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "5410da74-4c11-59cf-98f0-b3aa3066de0c"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4428-t-shirt-saint-ouen-3701480702145.html#/79-taille_fastmag-m/818-couleur-rayures_grises_27",
        "brand": "adresse",
        "name": "T-shirt Saint-Ouen à fines rayures grises - RAYURES...",
        "price": 45,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b6a78f24-8eee-5637-bf2d-89ff2e120e81"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/3980-t-shirt-jasmin-1300000259132.html",
        "brand": "adresse",
        "name": "Sweatshirt Jasmin noir",
        "price": 59,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "3bba7fc3-5fec-5db3-a293-ec9d3256f07f"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4293-jaures-hokusai-1300000266635.html",
        "brand": "adresse",
        "name": "Sweatshirt Jaurès Hokusai gris",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "af2d0c07-d8b1-5295-8642-aa890410ef6e"
      },
      {
        "link": "https://adresse.paris/chemises/4242-sur-chemise-roquette-1300000265713.html",
        "brand": "adresse",
        "name": "Sur-chemise Roquette cuivre",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "01c76640-866e-5354-bc5a-817f354222db"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/3894-t-shirt-villette-1300000238403.html",
        "brand": "adresse",
        "name": "T-shirt Villette marine",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b415f667-1865-529a-bff0-b956fa61bdbe"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4333-sweatshirt-love-velo-1300000266949.html",
        "brand": "adresse",
        "name": "Sweatshirt Love Velo",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "71166ad0-31cf-5cda-98c5-58595c8d62db"
      },
      {
        "link": "https://adresse.paris/chemises/4349-sur-chemise-roquette-1300000283229.html",
        "brand": "adresse",
        "name": "Sur-chemise Roquette bleue",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d233f4be-b04f-5ce2-ade4-0a3508536ce4"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4318-t-shirt-villette-1300000282413.html",
        "brand": "adresse",
        "name": "T-shirt Villette anthracite chine",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "3490df98-a535-5acd-b4a9-b8adbabd9cfb"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/3897-t-shirt-villette-1300000238229.html",
        "brand": "adresse",
        "name": "T-shirt Villette blanc",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "17ff38a2-a92d-5bf4-ae79-352b48867918"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4476-pull-monceau-merinos-3701480705085.html",
        "brand": "adresse",
        "name": "Pull Monceau marine",
        "price": 90,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "55785b0d-d6cc-543c-850a-9bf59f9243e7"
      },
      {
        "link": "https://adresse.paris/pantalons/4488-pantalon-fleming-warm-3701480704743.html",
        "brand": "adresse",
        "name": "Pantalon Fleming warm gris",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c2eb140d-a04f-5bde-9def-ba9ff3a53123"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4430-t-shirt-bel-air-3701480702206.html",
        "brand": "adresse",
        "name": "T-shirt Bel Air en coton à rayures bleues",
        "price": 45,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "16448864-4f54-5c37-9941-123843ecde05"
      },
      {
        "link": "https://adresse.paris/pantalons/3986-jean-tight-fit-ubranded-401-0000000125925.html",
        "brand": "adresse",
        "name": "Jean Unbranded Brut 100% coton",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c61e727e-7f05-5c10-ba02-dde366c3d193"
      },
      {
        "link": "https://adresse.paris/accessoires/4472-echarpe-saint-sulpice-3701480705283.html",
        "brand": "adresse",
        "name": "Echarpe Saint-Sulpice verte",
        "price": 65,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6935d21d-c7bf-5fe2-95f3-82d46cbc1221"
      },
      {
        "link": "https://adresse.paris/chemises/4218-chemise-solferino-1300000265041.html",
        "brand": "adresse",
        "name": "Chemise Solferino infroissable rayures grises",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "a0f4ede8-3529-510a-a1f2-04c35d958ae2"
      },
      {
        "link": "https://adresse.paris/derniere-chance/4238-t-shirt-ranelagh-1300000262026.html",
        "brand": "adresse",
        "name": "T-shirt raglan Ranelagh gris chine",
        "price": 15,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c2545b43-b6b1-54cc-91a3-9ab979abf68e"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4189-t-shirt-hokusai-1300000261630.html",
        "brand": "adresse",
        "name": "T-shirt Hokusai marine",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "280ffb3a-2b9d-5c8a-ab78-6e62c86466e7"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/3972-pull-vincennes-1300000257442.html",
        "brand": "adresse",
        "name": "Pull Vincennes kaki",
        "price": 79,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c6fc9301-1557-5b24-8caa-9961bdebda70"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4446-saint-victor-merinos-3701480705306.html",
        "brand": "adresse",
        "name": "Pull Saint Victor marine",
        "price": 110,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "1a29a4be-c876-5b47-9245-a5aa4fefd7df"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4447-saint-victor-merinos-3701480705382.html",
        "brand": "adresse",
        "name": "Pull Saint Victor bordeaux",
        "price": 110,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "f4c34f55-f533-5c87-a3b4-ef9832f0a323"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4479-pull-arsenal-merinos-3701480705207.html",
        "brand": "adresse",
        "name": "Pull Arsenal vert",
        "price": 125,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "03b7c846-97be-52a0-bbdf-9e0ab77b4953"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/3893-t-shirt-villette-1300000253550.html",
        "brand": "adresse",
        "name": "T-shirt Villette noir",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "8b318e4b-c82c-5a3e-8132-6c7992feb88a"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4432-t-shirt-jemmapes-3701480702770.html",
        "brand": "adresse",
        "name": "T-shirt Jemmapes en coton à rayures marines",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "4e849e3e-78ed-53e1-b488-34b07a806243"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4469-t-shirt-planete-3701480703609.html",
        "brand": "adresse",
        "name": "T-shirt broderie \"planète",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "eda02449-8764-5c37-a849-a18da8c762f5"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4220-jourdain-merinos-1300000262453.html",
        "brand": "adresse",
        "name": "Pull Jourdain marine",
        "price": 125,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "223037d8-1f9c-5c04-b3b3-29d9ba9cf692"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4468-t-shirt-planete-3701480703661.html",
        "brand": "adresse",
        "name": "T-shirt broderie \"planète",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "7160dc70-6aea-5a96-882e-86f96726e465"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4449-jourdain-merinos-3701480704941.html",
        "brand": "adresse",
        "name": "Pull Jourdain bordeaux",
        "price": 125,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6adf918b-ec2c-5e97-aa87-80978d42a781"
      },
      {
        "link": "https://adresse.paris/pantalons/4517-pantalon-fleming-basic-3701480704842.html",
        "brand": "adresse",
        "name": "Pantalon Fleming Basic beige",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6dce97d1-d9ae-5847-abb3-94419e3d2601"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4448-jourdain-merinos-3701480705016.html",
        "brand": "adresse",
        "name": "Pull Jourdain vert",
        "price": 125,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "299ec959-c948-5fd6-8e4b-6eee28e563e0"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4475-pull-monceau-merinos-3701480705146.html",
        "brand": "adresse",
        "name": "Pull Monceau vert",
        "price": 90,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "9a9eb2e3-6b7b-55a0-ab2f-d2307419a637"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4221-aligre-merinos-1300000262514.html",
        "brand": "adresse",
        "name": "Pull Aligre marine",
        "price": 115,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "a9939270-77e6-5dbf-b6d3-6d18b38d1c1d"
      },
      {
        "link": "https://adresse.paris/pantalons/4355-pantalon-phil-1300000283670.html",
        "brand": "adresse",
        "name": "Pantalon Phil marine",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "205c014e-22ca-5223-9257-b0a7250973c7"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4198-pull-bicolore-gaite-1300000247764.html",
        "brand": "adresse",
        "name": "Pull fin et graphique Gaité",
        "price": 69,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d5a11469-d4f9-5dbd-b735-c0dd94b4a4eb"
      },
      {
        "link": "https://adresse.paris/pantalons/4227-pantalon-fleming-flex-1300000260671.html",
        "brand": "adresse",
        "name": "Pantalon Fleming Flex marine",
        "price": 129,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6c869623-0e79-5f36-95f3-43369d090a7a"
      },
      {
        "link": "https://adresse.paris/pantalons/4516-pantalon-fleming-basic-3701480704897.html",
        "brand": "adresse",
        "name": "Pantalon Fleming Basic bleu",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "16372c9c-838a-5561-a0cb-cb4a8e0c8fc6"
      },
      {
        "link": "https://adresse.paris/pantalons/3459-pantalon-fleming-warm-fortex-1300000251273.html",
        "brand": "adresse",
        "name": "Pantalon Fleming warm Fortex® marine",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d38e0b6d-4a25-5daf-a3f4-12b78e1c0f23"
      },
      {
        "link": "undefined",
        "brand": "adresse",
        "name": "",
        "price": null,
        "_id": "6e789c0a-7055-5ec6-b18e-e2285ddabdb5"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/3965-manteau-sorbonne-en-laine-1300000248686.html",
        "brand": "adresse",
        "name": "Mackintosh Sorbonne",
        "price": 199,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "90f19300-7515-522d-a3b9-167bc6788abe"
      },
      {
        "link": "https://adresse.paris/pantalons/3395-jean-tight-elasthane-ubranded-1000000157130.html",
        "brand": "adresse",
        "name": "Jean Unbranded Brut 99% coton",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "66a06b34-f462-59e9-9daf-ab3244776c19"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/3336-manteau-technique-elon-1300000245005.html",
        "brand": "adresse",
        "name": "Imperméable Elon Crossover",
        "price": 449,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "790d61c5-0993-5d2b-bfed-8ea081860a85"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4379-henley-ambroise-pression-1300000282215.html",
        "brand": "adresse",
        "name": "Henley Ambroise marine chiné en coton",
        "price": 60,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "e9bb244a-712f-5236-8f59-564d8d769154"
      },
      {
        "link": "https://adresse.paris/accessoires/4473-echarpe-saint-sulpice-3701480705276.html",
        "brand": "adresse",
        "name": "Echarpe Saint-Sulpice marine",
        "price": 65,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "0a86efdd-454a-54d2-bfde-6125c9394438"
      },
      {
        "link": "https://adresse.paris/pantalons/4246-chinos-thomas-1300000266291.html",
        "brand": "adresse",
        "name": "Chino Thomas marine",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "54f8e179-af1d-5f8a-b0dd-c602c12f0efe"
      },
      {
        "link": "https://adresse.paris/chemises/4512-odeon-flanelle-coton-ea-3701480705689.html",
        "brand": "adresse",
        "name": "Chemise Odéon en flanelle marine",
        "price": 95,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b0db64b8-b417-5fc9-b823-b0289b0500b5"
      },
      {
        "link": "https://adresse.paris/chemises/4214-chemise-odeon-recytech-1300000264709.html",
        "brand": "adresse",
        "name": "Chemise Odéon recytech rayures vertes",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "ed441f5b-25b6-50d7-b6e3-b76400602878"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/3904-blouson-belleville-a-motifs-1300000248440.html",
        "brand": "adresse",
        "name": "Blouson Belleville x Fortex®",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "ae7ee606-bbaa-5202-83c6-63d1a47c4793"
      },
      {
        "link": "https://adresse.paris/derniere-chance/4147-chemise-charonne-blanche-1300000256964.html",
        "brand": "adresse",
        "name": "Chemise Charonne blanche",
        "price": 48,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b322ed7c-85f7-5bf8-8bf2-5cedf623dcc0"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4461-jaures-hokusai-3701480704491.html",
        "brand": "adresse",
        "name": "Sweatshirt Jaurès Hokusai marine chine",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "5a2e7e32-93b5-5038-be86-fcb6202fcefb"
      },
      {
        "link": "https://adresse.paris/derniere-chance/3477-veste-de-travail-gambetta-1300000248266.html",
        "brand": "adresse",
        "name": "Veste worker Gambetta déperlante",
        "price": 49,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "7f210e97-9d59-54d7-8c48-0f7594b84d12"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4334-t-shirt-saint-martin-1300000262194.html",
        "brand": "adresse",
        "name": "T-shirt Saint-Martin gris",
        "price": 39,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "8ca29c16-945d-593c-be71-776da1918673"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4335-t-shirt-saint-martin-1300000262149.html",
        "brand": "adresse",
        "name": "T-shirt Saint-Martin",
        "price": 39,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "a40ac564-7b1a-50e0-8ab3-81caafac6f84"
      },
      {
        "link": "https://adresse.paris/derniere-chance/3983-t-shirt-ranelagh-1300000259194.html",
        "brand": "adresse",
        "name": "T-shirt raglan Ranelagh bleu chine",
        "price": 18,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "a5988480-4094-5558-a85d-0f631ce733ea"
      },
      {
        "link": "https://adresse.paris/derniere-chance/3982-t-shirt-ranelagh-1300000259255.html",
        "brand": "adresse",
        "name": "T-shirt raglan Ranelagh kaki",
        "price": 18,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "0cf8da4c-68fb-546c-bcb2-51cc3a1c56dc"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4338-t-shirt-love-velo-1300000266901.html",
        "brand": "adresse",
        "name": "T-shirt Love Velo bleu poilu",
        "price": 39,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "043df6a2-02a0-52d1-bcba-e05124ee24ff"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4193-t-shirt-hokusai-1300000261395.html",
        "brand": "adresse",
        "name": "T-shirt Hokusai Blanc",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "37c17912-28f9-5068-951f-1277edac11e5"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4470-t-shirt-planete-3701480703555.html",
        "brand": "adresse",
        "name": "T-shirt broderie \"planète",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "13adcd81-36af-5f64-aa04-80bc3c4a8b4b"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4244-belleville-laine-laminee-1300000263627.html",
        "brand": "adresse",
        "name": "Teddy Belleville caramel",
        "price": 215,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "25f3263f-df9d-5be3-a759-7e63f15eecde"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4243-belleville-laine-laminee-1300000263689.html",
        "brand": "adresse",
        "name": "Teddy Belleville vert",
        "price": 188,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6ea31af3-84b4-51fc-b0ad-a4fec6907b0b"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4353-sweatshirt-zippe-pernety-1300000283762.html",
        "brand": "adresse",
        "name": "Sweatshirt zippé Pernety marine",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b1d68bea-da63-5375-a21e-ba3b88d26e4e"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/3981-t-shirt-jasmin-1300000259071.html",
        "brand": "adresse",
        "name": "Sweatshirt Jasmin graphite",
        "price": 59,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "855585d5-a1a7-532c-85c2-a09cc73a58d0"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4376-jaures-hokusai-3701480702398.html",
        "brand": "adresse",
        "name": "Sweat Jaurès Hokusai noir",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d03dc14c-6eb3-5706-b21c-ea0126699c4a"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4292-jaures-hokusai-1300000282376.html",
        "brand": "adresse",
        "name": "Sweatshirt Jaurès marine",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "1bee6524-9053-54f5-8123-29a2ea771342"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4294-jaures-hokusai-1300000266598.html",
        "brand": "adresse",
        "name": "Sweatshirt Jaurès Hokusai bordeaux",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "dc158b34-76ac-5bd7-80bd-b234263e19b6"
      },
      {
        "link": "https://adresse.paris/chemises/4348-sur-chemise-roquette-1300000283274.html",
        "brand": "adresse",
        "name": "Sur-chemise Roquette camel",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "87a3b8c0-9068-5e69-8605-24cc30f7381e"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/3973-pull-vincennes-1300000257381.html",
        "brand": "adresse",
        "name": "Pull Vincennes écru",
        "price": 79,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "7e016b95-01d3-514a-8c8f-8746f448d6eb"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4237-saint-victor-merinos-1300000262323.html",
        "brand": "adresse",
        "name": "Pull Saint Victor caramel",
        "price": 110,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "0c6bbad4-75ea-5222-b24c-e8cd173897f4"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/3919-pull-a-col-rond-monceau-1300000247948.html",
        "brand": "adresse",
        "name": "Pull Monceau Ecru",
        "price": 79,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d88e54aa-f7bf-5098-8ee8-f5a460d30c7f"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/3918-pull-a-col-rond-monceau-1300000248006.html",
        "brand": "adresse",
        "name": "Pull Monceau Gris",
        "price": 79,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "a44abd25-3996-5ee5-b941-b78592fa8247"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4199-pull-bicolore-gaite-1300000247702.html",
        "brand": "adresse",
        "name": "Pull bicolore Gaite marine écru",
        "price": 69,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "8df749c0-3197-5ad2-94b7-c6146b3ee439"
      },
      {
        "link": "https://adresse.paris/derniere-chance/3827-manteau-europe-1300000251334.html",
        "brand": "adresse",
        "name": "Manteau Europe",
        "price": 74,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "f96abe2e-9d73-5da8-9300-89772fddc676"
      },
      {
        "link": "https://adresse.paris/derniere-chance/4255-sorbonne-laine-laminee-1300000263801.html",
        "brand": "adresse",
        "name": "Mackintosh Sorbonne vert",
        "price": 224,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "18d27105-7aed-5635-b5fd-e59b794e09d5"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4256-sorbonne-laine-laminee-1300000263740.html",
        "brand": "adresse",
        "name": "Mackintosh Sorbonne caramel",
        "price": 209,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "fe95acfa-7a7b-5344-9698-ae50a87c28a7"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/3926-manteau-sorbonne-en-laine-1300000251099.html",
        "brand": "adresse",
        "name": "Mackintosh Sorbonne marine",
        "price": 259,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "5de687bb-e19e-59df-b8bf-5943dd21149d"
      },
      {
        "link": "https://adresse.paris/chaussettes-bonnets/3822-echarpe-garibaldi-bicolore-1300000253642.html",
        "brand": "adresse",
        "name": "Echarpe Garibaldi écrue",
        "price": 44,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6a0170e9-235c-5d3b-a46d-4210b8542ed4"
      },
      {
        "link": "https://adresse.paris/chemises/4216-chemise-odeon-recytech-1300000264587.html",
        "brand": "adresse",
        "name": "Chemise Odéon recytech blanche",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "9eb9ba30-30c1-590b-a889-360a78f902b3"
      },
      {
        "link": "https://adresse.paris/chemises/4219-chemise-charonne-tech-1300000265102.html",
        "brand": "adresse",
        "name": "Chemise Charonne recytech bleu chine",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "1281832f-8856-56e3-a168-60aed98e814f"
      },
      {
        "link": "https://adresse.paris/derniere-chance/4222-chemise-charonne-1300000265164.html",
        "brand": "adresse",
        "name": "Chemise Charonne marine",
        "price": 35,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b5443893-e85a-5041-b610-90a0b84471c3"
      },
      {
        "link": "https://adresse.paris/content/4-a-propos",
        "brand": "adresse",
        "name": "",
        "price": null,
        "_id": "65498594-110c-5897-af1b-3b186e1a50da"
      },
      {
        "link": "undefined",
        "brand": "adresse",
        "name": "",
        "price": null,
        "_id": "6e789c0a-7055-5ec6-b18e-e2285ddabdb5"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4217-manteau-technique-elon-1300000262576.html",
        "brand": "adresse",
        "name": "Imperméable Elon Crossover",
        "price": 449,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d773eb8a-9a5b-5acd-8076-cb39b2101e2c"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4519-gilet-warren-sans-manche-3701480706266.html",
        "brand": "adresse",
        "name": "Gilet sans manches Warren réversible",
        "price": 199,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "ab74790b-d5b7-541b-87d4-fe7116adf317"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4502-coach-jacket-billy-warm-3701480706365.html",
        "brand": "adresse",
        "name": "Coach jacket Billy Warm",
        "price": 265,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "a5068272-07b2-5bb7-b1e0-78fb472ef836"
      },
      {
        "link": "https://adresse.paris/accessoires/4529-bonnet-roy-3701480706648.html",
        "brand": "adresse",
        "name": "Bonnet Roy vert",
        "price": 50,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "2a0df48e-7b9e-5f5a-ac45-61ee6776f833"
      },
      {
        "link": "https://adresse.paris/pantalons/4250-chinos-thomas-1300000265812.html",
        "brand": "adresse",
        "name": "Chino Thomas beige",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c4ce3dda-a66b-541f-923a-0246d044e977"
      },
      {
        "link": "https://adresse.paris/chemises/4513-odeon-flanelle-coton-ea-3701480705634.html",
        "brand": "adresse",
        "name": "Chemise Odéon en flanelle grise",
        "price": 95,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "3e4241c2-241b-56ee-b308-89868038454a"
      },
      {
        "link": "https://adresse.paris/home/3968-blouson-gallion-1300000257800.html",
        "brand": "adresse",
        "name": "Teddy Gallion taupe",
        "price": 169,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "448b251e-e77e-5526-9a74-343c22a8bf10"
      },
      {
        "link": "https://adresse.paris/accessoires/4530-bonnet-roy-3701480706631.html",
        "brand": "adresse",
        "name": "Bonnet Roy bordeaux",
        "price": 50,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d52d1995-3887-5ebe-b041-c23cc8f983a7"
      },
      {
        "link": "undefined",
        "brand": "adresse",
        "name": "",
        "price": null,
        "_id": "6e789c0a-7055-5ec6-b18e-e2285ddabdb5"
      },
      {
        "link": "https://adresse.paris/chemises/4531-sur-chemise-menilmontant-3701480706211.html",
        "brand": "adresse",
        "name": "Sur-chemise Menilmontant rouge",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "1e37ef50-5f24-5dea-b2a5-a893dbfa3073"
      },
      {
        "link": "https://adresse.paris/chaussettes-bonnets/4427-chaussettes-anglet-3701480704194.html",
        "brand": "adresse",
        "name": "Chaussettes Anglet motifs écailles \"Seigaiha\" à l'unité",
        "price": 9,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "356d9498-4f1f-5d6a-917e-933b3f4a5dd2"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4185-t-shirt-valdes-1300000259675.html",
        "brand": "adresse",
        "name": "T-shirt Valdes blanc et bleu",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "56f2f57e-c0fc-53ac-a3c9-ac0f41ad3bb6"
      },
      {
        "link": "https://adresse.paris/pantalons/4370-chinos-thomas-3701480700134.html",
        "brand": "adresse",
        "name": "Chino Thomas camel",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "ed784bf9-9733-5cda-929b-5a12e03e898d"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4518-gilet-warren-sans-manches-3701480706310.html",
        "brand": "adresse",
        "name": "Gilet sans manches Warren réversible",
        "price": 199,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "5081e9d8-2b4d-52ad-8eda-e7ebb8adde8d"
      },
      {
        "link": "https://adresse.paris/chemises/4532-sur-chemise-menilmontant-3701480706167.html",
        "brand": "adresse",
        "name": "Sur-chemise Menilmontant jaune",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "07a53e24-a305-5220-aef7-6c4dfb4599fa"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4478-sweats-jaures-3701480704583.html",
        "brand": "adresse",
        "name": "Sweatshirt Jaurès moutarde",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "62360eae-0a42-5761-b909-aeedfd9d7b9f"
      },
      {
        "link": "https://adresse.paris/pantalons/4369-chinos-thomas-3701480700257.html",
        "brand": "adresse",
        "name": "Chino Thomas gris",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c4797aee-69bc-548d-9f52-127c7bc85fb3"
      },
      {
        "link": "https://adresse.paris/pantalons/4246-chinos-thomas-1300000266291.html",
        "brand": "adresse",
        "name": "",
        "price": null,
        "_id": "54f8e179-af1d-5f8a-b0dd-c602c12f0efe"
      },
      {
        "link": "https://adresse.paris/pantalons/4368-chinos-thomas-3701480700370.html",
        "brand": "adresse",
        "name": "Chino Thomas gris bleu",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "70dcfa81-814d-5d34-af6d-e6b00826b7b8"
      },
      {
        "link": "https://adresse.paris/pantalons/4245-chinos-thomas-1300000266413.html",
        "brand": "adresse",
        "name": "Chino Thomas noir",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "ee3f1cc5-bfa3-510b-a585-29be05ea6ba4"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4420-gilet-warren-reversible-3701480703173.html",
        "brand": "adresse",
        "name": "Gilet sans manches Warren réversible",
        "price": 199,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "e9e289c7-cb9a-505f-b059-beda9dfc22f4"
      },
      {
        "link": "https://adresse.paris/pantalons/4127-jean-tight-elasthane-ubranded-1300000260534.html",
        "brand": "adresse",
        "name": "Jean Unbranded Noir 99% coton",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6c6ce884-8b86-5f27-b5cd-9a4e2513e08f"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4477-sweats-jaures-3701480704545.html",
        "brand": "adresse",
        "name": "Sweat Jaurès kaki",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "387a4a8d-4ddf-55a0-b304-1e14bdf6ef52"
      },
      {
        "link": "https://adresse.paris/home/3970-blouson-gallion-1300000257688.html",
        "brand": "adresse",
        "name": "Teddy Gallion beige",
        "price": 169,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "f5225e1d-4610-58cf-8d3b-f602ea58dbb4"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/3969-blouson-gallion-1300000257749.html",
        "brand": "adresse",
        "name": "Teddy Gallion kaki déperlant",
        "price": 189,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "f2329243-2044-57a7-b997-fc3570f10f27"
      },
      {
        "link": "https://adresse.paris/chemises/4215-chemise-odeon-recytech-1300000264648.html",
        "brand": "adresse",
        "name": "Chemise Odéon recytech rayures bleues",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "689c53ee-4e84-52bf-bbf3-987d14ddc637"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/3895-t-shirt-villette-1300000238342.html",
        "brand": "adresse",
        "name": "T-shirt Villette gris",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "fa0c1030-8267-50ac-86c1-b6becca8528a"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4251-sweatshirt-jaures-1300000262088.html",
        "brand": "adresse",
        "name": "Sweatshirt Jaurès à rayures marines",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "1e5dd5a5-1846-56f7-b7e7-179db2c9b38e"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4317-t-shirt-villette-1300000282475.html",
        "brand": "adresse",
        "name": "T-shirt Villette kaki",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "f2539628-4558-5d44-861b-6be700b36699"
      },
      {
        "link": "https://adresse.paris/chemises/4241-sur-chemise-roquette-1300000265768.html",
        "brand": "adresse",
        "name": "Sur-chemise Roquette kaki",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "22f84703-b7da-5e64-a86a-acda7e6afede"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4157-pull-a-col-rond-monceau-1300000257503.html",
        "brand": "adresse",
        "name": "Pull Monceau Sauge",
        "price": 79,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c7d39017-2cd9-5159-81ac-896506f39223"
      },
      {
        "link": "https://adresse.paris/chemises/4460-sur-chemise-roquette-3701480704088.html",
        "brand": "adresse",
        "name": "Sur-chemise Roquette marine",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "02e30632-b6b3-5938-89c3-f30146c8bf3c"
      },
      {
        "link": "https://adresse.paris/pantalons/4356-pantalon-phil-anthracite-1300000283625.html",
        "brand": "adresse",
        "name": "Pantalon Phil anthracite",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "12f9a1ea-4b5d-5bd0-b752-c8440d2e7b1d"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4177-manteau-soufflot-1300000258043.html",
        "brand": "adresse",
        "name": "Mackintosh Soufflot kaki",
        "price": 239,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "479285c1-582d-52bc-b3e8-95f09a50853d"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4236-saint-victor-merinos-1300000262392.html",
        "brand": "adresse",
        "name": "Pull Saint Victor vert",
        "price": 110,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b8a97244-d8a8-5cab-8443-4330c45765ea"
      },
      {
        "link": "https://adresse.paris/content/1-livraison",
        "brand": "adresse",
        "name": "",
        "price": null,
        "_id": "d689ff1a-2668-5382-a8fe-4874bd5adb27"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/4235-blouson-supakitch-1300000266758.html",
        "brand": "adresse",
        "name": "Blouson polaire Seine ADRESSE x SupaKitch (collaboration)",
        "price": 219,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "adac8522-755f-54e2-8273-c577abf9e788"
      },
      {
        "link": "https://adresse.paris/accessoires/4474-echarpe-saint-sulpice-3701480705269.html",
        "brand": "adresse",
        "name": "Echarpe Saint-Sulpice bordeaux",
        "price": 65,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b49e224f-ab9c-5d5f-a7c6-9f37abad845e"
      },
      {
        "link": "https://adresse.paris/chemises/4514-odeon-flanelle-coton-ea-3701480705580.html",
        "brand": "adresse",
        "name": "Chemise Odéon en flanelle anthracite",
        "price": 95,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "5977fc3b-3f32-55cb-b181-69a297fbaeb2"
      },
      {
        "link": "https://adresse.paris/derniere-chance/4145-chemise-odeon-1300000256841.html",
        "brand": "adresse",
        "name": "Chemise Odéon bleue ciel",
        "price": 48,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "1580b612-bd25-519d-b3f5-0364eebce36d"
      },
      {
        "link": "https://adresse.paris/pantalons/4487-pantalon-fleming-warm-3701480704798.html",
        "brand": "adresse",
        "name": "Pantalon Fleming warm marine",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "238be6e3-ea56-5de0-bc07-a989f72ec0b9"
      },
      {
        "link": "https://adresse.paris/chemises/4357-chemise-chaillot-1300000283809.html",
        "brand": "adresse",
        "name": "Chemise Chaillot à rayures bleues",
        "price": 85,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "edfd29c4-d118-5d52-bd2b-c4add16ef41d"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/3819-blouson-neil-1300000256209.html",
        "brand": "adresse",
        "name": "Blouson Neil",
        "price": 299,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "871c18a0-6884-5a41-aa0c-a51957f485ce"
      },
      {
        "link": "https://adresse.paris/home/3889-blouson-tolbiac-1300000248501.html",
        "brand": "adresse",
        "name": "Veste Tolbiac",
        "price": 179,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "55481c82-22d7-54cd-a045-74e044c7121a"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4393-t-shirt-valdes-3701480702077.html",
        "brand": "adresse",
        "name": "T-shirt Valdes blanc et vert",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "dcd39f77-c6b7-50c9-b3c0-ed9b3dde5a8a"
      },
      {
        "link": "https://adresse.paris/chemises/4527-chemise-odeon-en-flanelle-3701480705801.html",
        "brand": "adresse",
        "name": "Chemise Odéon en flanelle grise",
        "price": 95,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "a506fe7e-7a79-5347-9863-3d88814099c8"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4429-t-shirt-saint-ouen-3701480703340.html",
        "brand": "adresse",
        "name": "T-shirt Saint-Ouen en coton à rayures anthracites",
        "price": 45,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "02db75ec-ee9c-594c-a04c-001aa9f8833e"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4354-sweatshirt-zippe-pernety-1300000283724.html",
        "brand": "adresse",
        "name": "Sweatshirt zippé Pernety anthracite",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "5410da74-4c11-59cf-98f0-b3aa3066de0c"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4428-t-shirt-saint-ouen-3701480702145.html#/79-taille_fastmag-m/818-couleur-rayures_grises_27",
        "brand": "adresse",
        "name": "T-shirt Saint-Ouen à fines rayures grises - RAYURES...",
        "price": 45,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b6a78f24-8eee-5637-bf2d-89ff2e120e81"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/3980-t-shirt-jasmin-1300000259132.html",
        "brand": "adresse",
        "name": "Sweatshirt Jasmin noir",
        "price": 59,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "3bba7fc3-5fec-5db3-a293-ec9d3256f07f"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4293-jaures-hokusai-1300000266635.html",
        "brand": "adresse",
        "name": "Sweatshirt Jaurès Hokusai gris",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "af2d0c07-d8b1-5295-8642-aa890410ef6e"
      },
      {
        "link": "https://adresse.paris/chemises/4242-sur-chemise-roquette-1300000265713.html",
        "brand": "adresse",
        "name": "Sur-chemise Roquette cuivre",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "01c76640-866e-5354-bc5a-817f354222db"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/3894-t-shirt-villette-1300000238403.html",
        "brand": "adresse",
        "name": "T-shirt Villette marine",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "b415f667-1865-529a-bff0-b956fa61bdbe"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4333-sweatshirt-love-velo-1300000266949.html",
        "brand": "adresse",
        "name": "Sweatshirt Love Velo",
        "price": 75,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "71166ad0-31cf-5cda-98c5-58595c8d62db"
      },
      {
        "link": "https://adresse.paris/chemises/4349-sur-chemise-roquette-1300000283229.html",
        "brand": "adresse",
        "name": "Sur-chemise Roquette bleue",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d233f4be-b04f-5ce2-ade4-0a3508536ce4"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4318-t-shirt-villette-1300000282413.html",
        "brand": "adresse",
        "name": "T-shirt Villette anthracite chine",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "3490df98-a535-5acd-b4a9-b8adbabd9cfb"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/3897-t-shirt-villette-1300000238229.html",
        "brand": "adresse",
        "name": "T-shirt Villette blanc",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "17ff38a2-a92d-5bf4-ae79-352b48867918"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4476-pull-monceau-merinos-3701480705085.html",
        "brand": "adresse",
        "name": "Pull Monceau marine",
        "price": 90,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "55785b0d-d6cc-543c-850a-9bf59f9243e7"
      },
      {
        "link": "https://adresse.paris/pantalons/4488-pantalon-fleming-warm-3701480704743.html",
        "brand": "adresse",
        "name": "Pantalon Fleming warm gris",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c2eb140d-a04f-5bde-9def-ba9ff3a53123"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4430-t-shirt-bel-air-3701480702206.html",
        "brand": "adresse",
        "name": "T-shirt Bel Air en coton à rayures bleues",
        "price": 45,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "16448864-4f54-5c37-9941-123843ecde05"
      },
      {
        "link": "https://adresse.paris/pantalons/3986-jean-tight-fit-ubranded-401-0000000125925.html",
        "brand": "adresse",
        "name": "Jean Unbranded Brut 100% coton",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c61e727e-7f05-5c10-ba02-dde366c3d193"
      },
      {
        "link": "https://adresse.paris/accessoires/4472-echarpe-saint-sulpice-3701480705283.html",
        "brand": "adresse",
        "name": "Echarpe Saint-Sulpice verte",
        "price": 65,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6935d21d-c7bf-5fe2-95f3-82d46cbc1221"
      },
      {
        "link": "https://adresse.paris/chemises/4218-chemise-solferino-1300000265041.html",
        "brand": "adresse",
        "name": "Chemise Solferino infroissable rayures grises",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "a0f4ede8-3529-510a-a1f2-04c35d958ae2"
      },
      {
        "link": "https://adresse.paris/derniere-chance/4238-t-shirt-ranelagh-1300000262026.html",
        "brand": "adresse",
        "name": "T-shirt raglan Ranelagh gris chine",
        "price": 15,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c2545b43-b6b1-54cc-91a3-9ab979abf68e"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4189-t-shirt-hokusai-1300000261630.html",
        "brand": "adresse",
        "name": "T-shirt Hokusai marine",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "280ffb3a-2b9d-5c8a-ab78-6e62c86466e7"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/3972-pull-vincennes-1300000257442.html",
        "brand": "adresse",
        "name": "Pull Vincennes kaki",
        "price": 79,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "c6fc9301-1557-5b24-8caa-9961bdebda70"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4446-saint-victor-merinos-3701480705306.html",
        "brand": "adresse",
        "name": "Pull Saint Victor marine",
        "price": 110,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "1a29a4be-c876-5b47-9245-a5aa4fefd7df"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4447-saint-victor-merinos-3701480705382.html",
        "brand": "adresse",
        "name": "Pull Saint Victor bordeaux",
        "price": 110,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "f4c34f55-f533-5c87-a3b4-ef9832f0a323"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4479-pull-arsenal-merinos-3701480705207.html",
        "brand": "adresse",
        "name": "Pull Arsenal vert",
        "price": 125,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "03b7c846-97be-52a0-bbdf-9e0ab77b4953"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/3893-t-shirt-villette-1300000253550.html",
        "brand": "adresse",
        "name": "T-shirt Villette noir",
        "price": 30,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "8b318e4b-c82c-5a3e-8132-6c7992feb88a"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4432-t-shirt-jemmapes-3701480702770.html",
        "brand": "adresse",
        "name": "T-shirt Jemmapes en coton à rayures marines",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "4e849e3e-78ed-53e1-b488-34b07a806243"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4469-t-shirt-planete-3701480703609.html",
        "brand": "adresse",
        "name": "T-shirt broderie \"planète",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "eda02449-8764-5c37-a849-a18da8c762f5"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4220-jourdain-merinos-1300000262453.html",
        "brand": "adresse",
        "name": "Pull Jourdain marine",
        "price": 125,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "223037d8-1f9c-5c04-b3b3-29d9ba9cf692"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4468-t-shirt-planete-3701480703661.html",
        "brand": "adresse",
        "name": "T-shirt broderie \"planète",
        "price": 40,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "7160dc70-6aea-5a96-882e-86f96726e465"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4449-jourdain-merinos-3701480704941.html",
        "brand": "adresse",
        "name": "Pull Jourdain bordeaux",
        "price": 125,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6adf918b-ec2c-5e97-aa87-80978d42a781"
      },
      {
        "link": "https://adresse.paris/pantalons/4517-pantalon-fleming-basic-3701480704842.html",
        "brand": "adresse",
        "name": "Pantalon Fleming Basic beige",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6dce97d1-d9ae-5847-abb3-94419e3d2601"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4448-jourdain-merinos-3701480705016.html",
        "brand": "adresse",
        "name": "Pull Jourdain vert",
        "price": 125,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "299ec959-c948-5fd6-8e4b-6eee28e563e0"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4475-pull-monceau-merinos-3701480705146.html",
        "brand": "adresse",
        "name": "Pull Monceau vert",
        "price": 90,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "9a9eb2e3-6b7b-55a0-ab2f-d2307419a637"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4221-aligre-merinos-1300000262514.html",
        "brand": "adresse",
        "name": "Pull Aligre marine",
        "price": 115,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "a9939270-77e6-5dbf-b6d3-6d18b38d1c1d"
      },
      {
        "link": "https://adresse.paris/pantalons/4355-pantalon-phil-1300000283670.html",
        "brand": "adresse",
        "name": "Pantalon Phil marine",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "205c014e-22ca-5223-9257-b0a7250973c7"
      },
      {
        "link": "https://adresse.paris/pulls-et-sweatshirts/4198-pull-bicolore-gaite-1300000247764.html",
        "brand": "adresse",
        "name": "Pull fin et graphique Gaité",
        "price": 69,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d5a11469-d4f9-5dbd-b735-c0dd94b4a4eb"
      },
      {
        "link": "https://adresse.paris/pantalons/4227-pantalon-fleming-flex-1300000260671.html",
        "brand": "adresse",
        "name": "Pantalon Fleming Flex marine",
        "price": 129,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "6c869623-0e79-5f36-95f3-43369d090a7a"
      },
      {
        "link": "https://adresse.paris/pantalons/4516-pantalon-fleming-basic-3701480704897.html",
        "brand": "adresse",
        "name": "Pantalon Fleming Basic bleu",
        "price": 99,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "16372c9c-838a-5561-a0cb-cb4a8e0c8fc6"
      },
      {
        "link": "https://adresse.paris/pantalons/3459-pantalon-fleming-warm-fortex-1300000251273.html",
        "brand": "adresse",
        "name": "Pantalon Fleming warm Fortex® marine",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "d38e0b6d-4a25-5daf-a3f4-12b78e1c0f23"
      },
      {
        "link": "undefined",
        "brand": "adresse",
        "name": "",
        "price": null,
        "_id": "6e789c0a-7055-5ec6-b18e-e2285ddabdb5"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/3965-manteau-sorbonne-en-laine-1300000248686.html",
        "brand": "adresse",
        "name": "Mackintosh Sorbonne",
        "price": 199,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "90f19300-7515-522d-a3b9-167bc6788abe"
      },
      {
        "link": "https://adresse.paris/pantalons/3395-jean-tight-elasthane-ubranded-1000000157130.html",
        "brand": "adresse",
        "name": "Jean Unbranded Brut 99% coton",
        "price": 119,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "66a06b34-f462-59e9-9daf-ab3244776c19"
      },
      {
        "link": "https://adresse.paris/manteaux-et-blousons/3336-manteau-technique-elon-1300000245005.html",
        "brand": "adresse",
        "name": "Imperméable Elon Crossover",
        "price": 449,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "790d61c5-0993-5d2b-bfed-8ea081860a85"
      },
      {
        "link": "https://adresse.paris/t-shirts-et-polos/4379-henley-ambroise-pression-1300000282215.html",
        "brand": "adresse",
        "name": "Henley Ambroise marine chiné en coton",
        "price": 60,
        "photo": "https://adresse.paris/themes/warehouse/img/blank.gif",
        "_id": "e9bb244a-712f-5236-8f59-564d8d769154"
      }
  ];
    const result = db.collection("products").insertMany(products);

    console.log(result);
}
main();