import { Injectable } from '@nestjs/common';

@Injectable()
export class InstallationService {
  install(): string {
    return 'install';
  }
}
