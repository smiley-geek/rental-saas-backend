
export interface Configuration {
    security: {
      jwtSecret: string;
      accessTokenExpiry: string;
      unusedRefreshTokenExpiryDays: number;
    };
  port:number,
    email: {
      name: string;
      from: string;
      retries: number;
      ses?: {
        accessKeyId: string;
        secretAccessKey: string;
        region: string;
      };
      transport?: {
        host: string;
        port: number;
        secure: boolean;
        auth: {
          user: string;
          pass: string;
        };
      };
    };
  
    
  
    // payments: {
    //   stripeApiKey: string;
    //   stripeProductId: string;
    //   stripeEndpointSecret: string;
    //   paymentMethodTypes: Array<Stripe.Checkout.SessionCreateParams.PaymentMethodType>;
    // };
  
    
  
    s3: {
      accessKeyId: string;
      secretAccessKey: string;
      region: string;
      profilePictureBucket?: string;
      profilePictureCdnHostname?: string;
    };
  
  
   
  }