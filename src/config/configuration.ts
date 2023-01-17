// import { config } from 'dotenv';
// import dotenvExpand from 'dotenv-expand';
 import { Configuration } from './config.interface';
// dotenvExpand.expand();

const int = (val: string | undefined, num: number): number =>
  val ? (isNaN(parseInt(val)) ? num : parseInt(val)) : num;
const bool = (val: string | undefined, bool: boolean): boolean =>
  val == null ? bool : val == 'true';

export default (): Configuration =>( {
  port: int(process.env.PORT ,3000),
 
  security: {
    jwtSecret: process.env.JWT_SECRET ?? 'rental-saas',
    accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY ?? '1h',
    unusedRefreshTokenExpiryDays: int(process.env.DELETE_EXPIRED_SESSIONS, 30),
 },
  
  email: {
    name: process.env.EMAIL_NAME ?? 'rental-saas',
    from: process.env.EMAIL_FROM ?? '',
    retries: int(process.env.EMAIL_FAIL_RETRIES, 3),
    ses: {
      accessKeyId: process.env.EMAIL_SES_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.EMAIL_SES_SECRET_ACCESS_KEY ?? '',
      region: process.env.EMAIL_SES_REGION ?? '',
    },
    transport: {
      host: process.env.EMAIL_HOST ?? '',
      port: int(process.env.EMAIL_PORT, 587),
      secure: bool(process.env.EMAIL_SECURE, false),
      auth: {
        user: process.env.EMAIL_USER ?? process.env.EMAIL_FROM ?? '',
        pass: process.env.EMAIL_PASSWORD ?? '',
      },
    },
  },
 
 
  s3: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY ?? '',
    secretAccessKey: process.env.AWS_S3_SECRET_KEY ?? '',
    region: process.env.AWS_S3_REGION ?? '',
    profilePictureBucket: process.env.AWS_S3_PROFILE_PICTURE_BUCKET ?? '',
    profilePictureCdnHostname:
      process.env.AWS_S3_PROFILE_PICTURE_CDN_HOST_NAME ?? '',
  },
  
});

