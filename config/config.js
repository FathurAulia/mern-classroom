const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  // mongoUri:
  //   process.env.MONGODB_URI ||
  //   process.env.MONGO_HOST ||
  //   "mongodb://" +
  //     (process.env.IP || "localhost") +
  //     ":" +
  //     (process.env.MONGO_PORT || "27017") +
  //     "/mernproject",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb+srv://yogaaulia00:0987612345@cluster0.fnsf3ae.mongodb.net/?retryWrites=true&w=majority",
};

export default config;
