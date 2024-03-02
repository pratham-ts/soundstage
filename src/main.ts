import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { SOUNDSTAGE_PACKAGE_NAME } from 'common/proto/soundstage/soundstage';

config();

async function bootstrap() {
  const port = process.env.PORT_NUMBER;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(
          __dirname,
          '../common/proto/soundstage/soundstage.proto',
        ),
        package: SOUNDSTAGE_PACKAGE_NAME,
        url: `localhost:${port}`,
      },
    },
  );
  app
    .listen()
    .then(() => {
      console.log(`Server is listening on: ${port}`);
    })
    .catch((err) => {
      console.log(err);
    });
}
bootstrap();
