import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreateUserDto } from 'src/lib/dto';
import { LoginEmailDto, VerifyLoginTokenDto } from 'src/lib/dto/auth.dto';
import { JwtAuthGuard } from 'src/lib/guards';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: Required<CreateUserDto>) {
    return await this.authService.createAccount(createUserDto);
  }

  @Post('login')
  async login(@Body() loginEmailDto: Required<LoginEmailDto>) {
    return await this.authService.login(loginEmailDto);
  }

  @Post('login/verify')
  async verifyLogin(
    @Body() verifyLoginTokenDto: Required<VerifyLoginTokenDto>,
  ) {
    return await this.authService.verifyLoginToken(verifyLoginTokenDto);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    return await this.authService.getProfile(req.user._id);
  }
}
