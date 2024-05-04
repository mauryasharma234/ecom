/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://host.docker.internal:27017/buyitnow",

    CLOUD_NAME: "dmzvvpjej",
    CLOUDINARY_API_KEY: "771393276322984",
    CLOUDINARY_API_SECRET: "xcPbjR3lRv51YRzTWrlNfNJ7ijM",

    STRIPE_PUBLIC_KEY: "pk_test_51P9Xq0SCcokM8atobVRFINHTsBd4RounLZhAsOzBq5g2XvkfqEyceh63xFXzjDePbr7lH88BBTpZs3bq1n6T59sc00XPy3DTgz",
    STRIPE_PRIVATE_KEY: "sk_test_51P9Xq0SCcokM8atoPQsLe7oQJ376cQmFBXPI4JEPpmkVuiHLu7SP1gYMeJJb4lOsrs6YY9vuCWQYcaV9pvQ6I37P00JzfU58yM",

    STRIPE_WEBHOOK_SECRET: "",

    NEXTAUTH_SECRET: "codingwithabbas",
  },
  images: {
    domains: ["res.cloudinary.com", "encrypted-tbn0.gstatic.com", "eit-enbed-public-uat.s3.ap-south-1.amazonaws.com"]

  },
};

module.exports = nextConfig;
