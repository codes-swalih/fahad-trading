import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Wrench, Shield, HardHat, Zap } from "lucide-react";

import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import glove from "../assets/glowe2.jpeg";
import shoes from "../assets/shoes.jpeg";
import vest from "../assets/vest.jpeg";
import helmet from "../assets/helmet1.jpeg";
import spare from "../assets/spare.jpg";
import crown from "../assets/brands/crown.jpeg";
import dewesser from "../assets/brands/dewesser.jpeg";
import ka7 from "../assets/brands/ka7.jpeg";
import makute from "../assets/brands/makute.jpeg";
import proguard from "../assets/brands/proguard.jpeg";
import roadmate from "../assets/brands/roadmate.jpeg";
import roto from "../assets/brands/roto.jpeg";
import vaultex from "../assets/brands/vaultex.jpeg";
import venus from "../assets/brands/venus.jpeg";
import threem from "../assets/brands/3m.png";
import volta from "../assets/brands/volta.jpeg";
const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: Wrench, color: "from-gray-600 to-gray-700" },
    { name: "Tools", icon: Wrench, color: "from-blue-600 to-blue-700" },
    { name: "Power Tools", icon: Zap, color: "from-orange-500 to-orange-600" },
    {
      name: "Safety Equipment",
      icon: Shield,
      color: "from-green-600 to-green-700",
    },
    {
      name: "Core Drill",
      icon: HardHat,
      color: "from-purple-600 to-purple-700",
    },
  ];

  const brands = [
    {
      name: "Dewalt",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/1200px-DeWalt_Logo.svg.png",
    },
    {
      name: "Bosch",
      logo: "https://s19538.pcdn.co/wp-content/uploads/2016/09/Bosch-Logo.png",
    },
    {
      name: "Makita",
      logo: "https://thumbs.dreamstime.com/b/photo-white-makita-word-green-background-construction-tools-set-photo-white-makita-word-green-background-235421856.jpg",
    },
    {
      name: "Stanley",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Stanley_Hand_Tools_logo.svg/1200px-Stanley_Hand_Tools_logo.svg.png",
    },
    {
      name: "Cayken",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSssHH_3d-Klz_DD0kBKRy7D28ezfyPVYVSA&s",
    },
    {
      name: "3M",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdrCTFYk1X1FFsaNK4Nh1cKM04hsA9VCsdg&s",
    },
  ];

  const products = [
    // Tools
    // { name: 'Dewesser', category: 'Tools', image: 'https://dewesser.com/wp-content/uploads/2025/01/Untitled-design-4-1-1.jpg' },
    // { name: 'Roto', category: 'Power Tools', image: 'https://m.media-amazon.com/images/I/71Sy2guCroL.jpg' },
    // { name: 'Tuf Fix', category: 'Tools', image: 'https://tuffix.com/cdn/shop/files/18-tool-bag.png?v=1710842015' },
    // { name: 'Juster', category: 'Tools', image: 'https://cdnimg.chinagoods.com/jpg/2023/02/25/99c1f2cb3db1843c166805fcf9c76932.jpg?imageMogr2/format/webp/thumbnail/400x' },
    // { name: 'Danmi', category: 'Tools', image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/451921500/TR/YP/FG/160813913/20v-danmi-cordless-screw-driver.jpg' },
    // { name: 'Clarke', category: 'Tools', image: 'https://3.imimg.com/data3/HU/LQ/MY-1447722/clarke-tool-500x500.jpg' },
    // { name: 'Vermolen\'s', category: 'Tools', image: 'https://cdn.salla.sa/KlwqK/gUMmRRBKrmjR3ArvFk4NfTPM57Iml077VcbTyKtA.jpg' },
    // { name: 'Total', category: 'Tools', image: 'https://toolshub.co.in/wp-content/uploads/TH115326-1.jpg' },
    // { name: 'Kitools', category: 'Tools', image: 'https://m.media-amazon.com/images/I/41IIIszw2JL.jpg' },
    // { name: 'Stanley', category: 'Tools', image: 'https://rukminid2.flixcart.com/image/750/900/kwxv98w0/tool-kit/v/7/e/sch121s1h-b1-sch121s1h-b1-stanley-original-imag9ghjnnguzbyr.jpeg?q=90&crop=false' },
    // { name: 'Hero (Japan)', category: 'Tools', image: 'https://hem.co.jp/wp/wp-content/uploads/materials/com_rekishi_img_17.jpg' },

    // // Power Tools
    // { name: 'Makute', category: 'Power Tools', image: 'https://s.alicdn.com/@sc04/kf/H8f5a3d7e133d4bd39ea5829b938436abl.jpg' },
    // { name: 'Kitool', category: 'Power Tools', image: 'https://z.nooncdn.com/products/tr:n-t_400/pzsku/Z65072CEC331260B628F0Z/45/_/1659523011/115f20ae-4aeb-44a0-bfb2-689acf698d21.jpg' },
    // { name: 'Dewalt', category: 'Power Tools', image: 'https://in.dewalt.global/ASIA/PRODUCT/IMAGES/HIRES/DCF850N-XJ/DCF850N_1.jpg?resize=530x530' },
    // { name: 'Bosch', category: 'Power Tools', image: 'https://www.liontoolsmart.com/cdn/shop/products/BOSCH-IMPACT-DRILL-GSB-501-13-MM-1.jpg?v=1610364590' },
    // { name: 'Makita', category: 'Power Tools', image: 'https://makita.in/wp-content/uploads/2025/06/DTC102_PR_IMG.jpg' },
    // { name: 'Stanley Power', category: 'Power Tools', image: 'https://etoolstore.in/cdn/shop/files/71hHIeCMwPL._SX679.jpg?v=1719990765&width=1445' },
    // { name: 'Juster Power', category: 'Power Tools', image: 'https://p.globalsources.com/IMAGES/PDT/B1207903498/Rotary-Hammer.jpg' },
    // { name: 'Dewesser Power', category: 'Power Tools', image: 'https://dewesser.com/wp-content/uploads/2025/01/cordless-1.webp' },

    // // Safety Equipment
    // { name: 'KA7 Safety Shoes', category: 'Safety Equipment', image: 'https://dareensafety.com/public/images/20250517105439.webp--0' },
    // { name: 'Road Mate Safety Shoes', category: 'Safety Equipment', image: 'https://unitedvco.com/wp-content/uploads/2023/12/image-removebg.jpg' },
    // { name: 'Ultimate Plus Safety Shoes', category: 'Safety Equipment', image: 'https://5.imimg.com/data5/SELLER/Default/2024/6/425317643/VD/DQ/QW/7416951/high-tech-ht-856-ultimate-safety-shoes.jpg' },
    // { name: 'JCBman Safety Shoes', category: 'Safety Equipment', image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/296766780/AW/GR/JM/10280730/jcb-excavator-safety-shoes.jpg' },
    // { name: 'Roto Safety Equipment', category: 'Safety Equipment', image: 'https://content.jdmagicbox.com/quickquotes/images_main/safety-helmets-22-07-2020-057-185815609-txsae.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit' },
    // { name: 'Strong Hammer Safety', category: 'Safety Equipment', image: 'https://image.made-in-china.com/2f0j00HWPcgIUnbKoV/Multifunctional-Safety-Hammer-Multi-Purpose-Pliers-Hammer.webp' },
    // { name: '2MK Safety Vest', category: 'Safety Equipment', image: 'https://m.media-amazon.com/images/I/710SRp2VRpL._SL1500_.jpg' },
    // { name: 'VOLTA Safety Vest', category: 'Safety Equipment', image: 'https://cdn.salla.sa/jZbOpD/3e8cfbf8-e843-49f7-bcd4-b0bbc56854e3-995.94320486815x1000-A5FmYAGCga5D4A0AIeZYqFDc3OV8DLfKS9e5et7o.png' },
    // { name: 'Roto Safety Vest', category: 'Safety Equipment', image: 'https://res.cloudinary.com/fleetfarm-dam/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_400,q_auto,w_400/c_pad,h_400,w_400/v1/SKU_Assets/101728024?pgw=1' },
    // { name: 'Vaultex Safety Vest', category: 'Safety Equipment', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_y-F7d1s_A7ObyG0w6Lvuk6FuduLCHVepgQ&s' },
    // { name: 'Hi-Tex Safety Vest', category: 'Safety Equipment', image: 'https://i.ebayimg.com/images/g/nWMAAOSwOZ5kvw88/s-l400.jpg' },
    // { name: 'Super Hammer Safety Vest', category: 'Safety Equipment', image: 'https://www.blacksafeoutlet.com/cdn/shop/files/my-11134207-7r98q-lwcp4s0nozu287.jpg?v=1721114346&width=416' },
    // { name: '3M Safety Vest', category: 'Safety Equipment', image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/QV/DV/TZ/122409799/reflective-jacket-with-pockets-v1.jpg' },
    // { name: 'Volta Safety Gloves', category: 'Safety Equipment', image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/312511330/NB/QD/TJ/138864401/volta-cut-resistant-safety-gloves.jpeg' },
    // { name: 'Hi-Tex Safety Gloves', category: 'Safety Equipment', image: 'https://unitedvco.com/wp-content/uploads/2023/09/image-removebg-preview-30.webp' },
    // { name: 'Pro Guard Safety Gloves', category: 'Safety Equipment', image: 'https://m.media-amazon.com/images/I/81lkJ42BJOL.jpg' },
    // { name: 'OT Safety Gloves', category: 'Safety Equipment', image: 'https://m.media-amazon.com/images/I/51j+weBhxrL._UF1000,1000_QL80_.jpg' },
    // { name: 'SPH Safety Gloves', category: 'Safety Equipment', image: 'https://www.speccotools.com/uploaded/products/image-20231121194756.png' },
    // { name: 'Vaultex Safety Gloves', category: 'Safety Equipment', image: 'https://m.media-amazon.com/images/I/61Z3CuKtjIL._AC_UF894,1000_QL80_.jpg' },
    // { name: 'Vaultex Safety Helmet', category: 'Safety Equipment', image: 'https://youmats-media.s3.me-central-1.amazonaws.com/225725/conversions/Screenshot_2-removebg-preview-size_500_500.webp' },
    // { name: 'Hi-Tex Safety Helmet', category: 'Safety Equipment', image: 'https://modern.omar.alyomhost.org//storage/photos/shares/___________________________________1446-02-12______13_21_25_d0cedfb0.jpg' },
    // { name: '3M Safety Helmet', category: 'Safety Equipment', image: 'https://5.imimg.com/data5/HJ/HI/MY-2946210/3m-safety-helmet-500x500.jpg' },

    // Core Drill
    {
      name: "CAYKEN SCY-2050",
      category: "Core Drill",
      image:
        "https://caykentools.com/wp-content/uploads/2021/01/scy-2050-1.jpg",
    },
    {
      name: "CAYKEN SCY-2550",
      category: "Core Drill",
      image:
        "https://caykentools.com/wp-content/uploads/2021/01/scy-2050-1.jpg",
    },
    {
      name: "CAYKEN SCY-2550C (Gear)",
      category: "Core Drill",
      image: "https://caykentools.com/wp-content/uploads/2021/02/588A5453.jpg",
    },
    {
      name: "CAYKEN SCY-3050",
      category: "Core Drill",
      image: "https://caykentools.com/wp-content/uploads/2021/01/SCY-2050.jpg",
    },
    {
      name: "CAYKEN SCY-3050C (Gear)",
      category: "Core Drill",
      image: "https://caykentools.com/wp-content/uploads/2021/01/SCY-3050C.png",
    },
    {
      name: "CAYKEN Spare Parts",
      category: "Core Drill",
      image: spare,
    },
  ];

  const brandProducts = [
    {
      category: "Safety Shoes",
      brands: [ka7, roadmate, roto],
      displayImage: shoes,
      description:
        "We provide a Wide range of high quality Safety shoes of known brands across the world",
    },
    {
      category: "Safety Gloves",
      brands: [volta, proguard, vaultex],
      displayImage: glove,
      description:
        "We provide a Wide range of high quality Safety Gloves of known brands across the world",
    },
    {
      category: "Safety Helmets",
      brands: [vaultex, threem, venus],
      displayImage: helmet,
      description:
        "We provide a Wide range of high quality Safety Helmets of known brands across the world",
    },
    {
      category: "Safety Vests",
      brands: [volta, roto, vaultex, threem],
      displayImage: vest,
      description:
        "We provide a Wide range of high quality Safety Vest of known brands across the world",
    },
    {
      category: "Hilti Drills",
      brands: [
        "https://thumbs.dreamstime.com/b/photo-white-makita-word-green-background-construction-tools-set-photo-white-makita-word-green-background-235421856.jpg",
        "https://bctechnologies.co.in/wp-content/uploads/2020/07/bosch-logo-big.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/1200px-DeWalt_Logo.svg.png",
        makute,
        dewesser,
        crown,
      ],
      displayImage:
        "https://m.media-amazon.com/images/I/41ln6-xDF4L.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
      description:
        "We provide a Wide range of high quality Hilti Drills of known brands across the world",
    },
    {
      category: "Drills",
      brands: [
        "https://thumbs.dreamstime.com/b/photo-white-makita-word-green-background-construction-tools-set-photo-white-makita-word-green-background-235421856.jpg",
        "https://bctechnologies.co.in/wp-content/uploads/2020/07/bosch-logo-big.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/1200px-DeWalt_Logo.svg.png",
        makute,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Stanley_Hand_Tools_logo.svg/1200px-Stanley_Hand_Tools_logo.svg.png",
      ],
      displayImage:
        "https://cdn.thewirecutter.com/wp-content/media/2025/05/BEST-DRILLS-2048px-3209.jpg?auto=webp&quality=75&width=1024",
      description:
        "We provide a Wide range of high quality Drills of known brands across the world",
    },
    {
      category: "Angle Grinders",
      brands: [
        "https://thumbs.dreamstime.com/b/photo-white-makita-word-green-background-construction-tools-set-photo-white-makita-word-green-background-235421856.jpg",
        "https://bctechnologies.co.in/wp-content/uploads/2020/07/bosch-logo-big.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/1200px-DeWalt_Logo.svg.png",
        makute,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Stanley_Hand_Tools_logo.svg/1200px-Stanley_Hand_Tools_logo.svg.png",
        "https://5.imimg.com/data5/SELLER/Default/2021/9/PO/IC/NA/24201513/dongcheng-power-tools.jpg",
      ],
      displayImage:
        "https://www.boschtools.com/us/en/ocsmedia/261538-947/application-image/720x410/standard-angle-grinders-gws14-50-06017d0310.png",
      description:
        "We provide a Wide range of high quality Angle Grinders of known brands across the world",
    },
    {
      category: "Demolition Hammers",
      brands: [
        "https://thumbs.dreamstime.com/b/photo-white-makita-word-green-background-construction-tools-set-photo-white-makita-word-green-background-235421856.jpg",
        "https://bctechnologies.co.in/wp-content/uploads/2020/07/bosch-logo-big.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/1200px-DeWalt_Logo.svg.png",
        makute,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIrF6O7Cd7xuxrJz2pD1kLCIkLv0EpO0fgA&s",
        "https://5.imimg.com/data5/SELLER/Default/2021/9/PO/IC/NA/24201513/dongcheng-power-tools.jpg",
      ],
      displayImage:
        "https://ronixtools.com/img/media/products/2802/modeling-638161869219881985.webp",
      description:
        "We provide a Wide range of high quality Demolition Hammers of known brands across the world",
    },
    {
      category: "Cutters",
      brands: [
        "https://thumbs.dreamstime.com/b/photo-white-makita-word-green-background-construction-tools-set-photo-white-makita-word-green-background-235421856.jpg",
        "https://bctechnologies.co.in/wp-content/uploads/2020/07/bosch-logo-big.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/1200px-DeWalt_Logo.svg.png",
        makute,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Stanley_Hand_Tools_logo.svg/1200px-Stanley_Hand_Tools_logo.svg.png",
        crown,
      ],
      displayImage:
        "https://plus.unsplash.com/premium_photo-1661963010035-01c778b58916?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0dGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D",
      description:
        "We provide a Wide range of high quality Cutters of known brands across the world",
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleWhatsAppInquiry = (productName: string) => {
    const message = `Hi! I'm interested in ${productName}. Could you please provide more details and pricing?`;
    const whatsappUrl = `https://wa.me/971XXXXXXXX?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-gray-800 to-orange-900">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
            }}
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Catalog
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-200"
          >
            Discover our comprehensive range of professional tools and safety
            equipment
          </motion.p>
        </div>
      </section>

      {/* <h1>Our Branded Products</h1> */}

      {/* <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 max-w-md"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.name
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* brand products */}
      <div className="md:grid md:grid-cols-3 md:gap-5 md:p-10 p-5 flex flex-col gap-5  ">
        {brandProducts.map((items, index) => {
          return (
            <div
              key={index}
              className=" p-6 border bg-gray-100 text-black rounded-xl "
            >
              <h2 className="text-xl font-bold mb-2">{items.category}</h2>
              <p className="text-sm text-gray-600 mb-4">{items.description}</p>
              <img
                src={items.displayImage}
                alt={items.category}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <div className="grid grid-cols-2 gap-3">
                {items.brands.map((brand, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white border rounded-lg  flex items-center justify-center"
                  >
                    <img
                      src={brand}
                      alt={`Brand ${index + 1}`}
                      className=" h-14 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.open(
                    "https://wa.me/+966552601880?text=Hi! I would like to know more about your premium tools and services.",
                    "_blank"
                  )
                }
                className="w-full mt-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Inquire on WhatsApp</span>
              </motion.button>
            </div>
            // <CardContainer key={index} className=" text-black">
            //   <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-100 dark:border-black/[0.2] border-black/[0.1]   h-auto rounded-xl p-6 border  ">
            //     <CardItem
            //       translateZ="50"
            //       className="text-xl font-bold text-neutral-600 dark:text-black"
            //     >
            //       {items.category}
            //     </CardItem>
            //     <CardItem
            //       as="p"
            //       translateZ="60"
            //       className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-gray-600"
            //     >
            //    {items.description}
            //     </CardItem>
            //     <CardItem translateZ="100" className="w-full mt-4">
            //       <img
            //         src={items.displayImage}
            //         height="1000"
            //         width="1000"
            //         className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            //         alt="thumbnail"
            //       />
            //     </CardItem>
            //     <CardItem>
            //       <div className=" grid grid-cols-5 gap-5 mt-10">
            //         {items.brands.map((brand, index) => (
            //           <motion.div
            //             key={index}
            //             initial={{ opacity: 0, scale: 0.8 }}
            //             whileInView={{ opacity: 1, scale: 1 }}
            //             transition={{ duration: 0.6, delay: index * 0.1 }}
            //             whileHover={{ scale: 1.1 }}
            //             className="bg-gray-50  rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
            //           >
            //             <img
            //               src={brand}
            //               alt={"no"}
            //               className=" w-14 object-contain filter transition-all duration-300"
            //             />
            //           </motion.div>
            //         ))}
            //       </div>
            //     </CardItem>
            //     <motion.button
            //       whileHover={{ scale: 1.02 }}
            //       whileTap={{ scale: 0.98 }}
            //       className="w-full mt-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg"
            //     >
            //       <MessageCircle className="h-4 w-4" />
            //       <span>Inquire on WhatsApp</span>
            //     </motion.button>
            //   </CardBody>
            // </CardContainer>
          );
        })}
      </div>
      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Drills
            </h2>
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={`${product.name}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-100 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-w-16 h-80 md:64 bg-white aspect-h-12 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 md:h-64 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-blue-600 bg-blue-200 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        window.open(
                          "https://wa.me/+966552601880?text=Hi! I would like to know more about your premium tools and services.",
                          "_blank"
                        )
                      }
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Inquire on WhatsApp</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Your One-Stop Solution for Tool Repairs & Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Fahad Trading specializes in comprehensive repair and maintenance
            services for all types of tools and equipment — across all brands.
            No matter the issue, we’ve got you covered. For more enquiries,
            contact us today!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://wa.me/+966552351040?text=Hi! I Want to know more about your services.",
                  "_blank"
                )
              }
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Request Custom Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Catalog;
