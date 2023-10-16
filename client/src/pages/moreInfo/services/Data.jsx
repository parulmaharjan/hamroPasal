import CustomerSupport from "../../../assets/images/customerCare.png";
import QualityProducts from "../../../assets/images/quality.png";
import RelaibleProducts from "../../../assets/images/relaiable.png";
import PriceCompare from "../../../assets/images/priceCompare.png";
import SecurePayment from "../../../assets/images/securePayment.png";
import ReturnPolicy from "../../../assets/images/returnPolicy.png"
import RewardProgram from "../../../assets/images/reward.png";
import Delivery from "../../../assets/images/delivery.png";




export const DataServices = [
  {
    id: 1,
    title: "Customer Support",
    description: "we provide 24/7 customer services",
    img_url: CustomerSupport,
    visit: "/customer-support",
  },
  {
    id: 2,
    title: "Quality-product",
    description: "we provide quality product",
    img_url: QualityProducts,
    visit: "/quality-product",
  },
  {
    id: 3,
    title: "Relaiable-product",
    description: "we provide Relaiable product",
    img_url: RelaibleProducts,
    visit: "/relaiable-product",
  },
  {
    id: 4,
    title: "Pricing",
    description: "we provide quality product in low price",
    img_url: PriceCompare,
    visit: "/pricing",
  },
  {
    id: 5,
    title: "Secure-payment",
    description: "we provide secure payment services",
    img_url: SecurePayment,
    visit: "/secure-payment",
  },
  { id: 6,
    title: "Return Policy",
    description: "we have easy return policy",
    img_url: ReturnPolicy,
    visit: "/return-support",},
    {
        id:7,
        title:"Reward progarm",
        description:"We have reward program for our valuable customer",
        img_url:RewardProgram,
        visit:"/reward-progarm"
    },
    {
        id:8,
        title:" Fastest Delivery",
        description:"We have Fastest delivery service across the world",
        img_url:Delivery,
        visit:"/delivery"
    }
 
];
