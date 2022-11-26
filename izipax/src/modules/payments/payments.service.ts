import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import {
  PaymentsCreateDto,
  QOS_MTN_REQUEST_PAYMENT_RESPONSE,
  QOS_MTN_REQUEST_PAYMENT_STATUSCODE,
} from 'src/lib/dto/payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly httpService: HttpService) {}

  private QOS_MTN_CID = process.env.PAYMENT_QOS_MTN_CLIENT_ID;

  async httpRequest(
    url: string,
    method: string,
    data?: { [key: string]: string },
  ) {
    const headers = {
      Authorization: 'Basic ' + process.env.PAYMENT_QOS_MTN_BEARER_TOKEN,
    };
    try {
      if (method === 'GET')
        return await firstValueFrom(this.httpService.get(url, { headers }));
      else if (method === 'POST')
        return await firstValueFrom(
          this.httpService.post(url, data, { headers }),
        );
    } catch (error) {
      console.log(error);
    }
  }

  async payment_mtnbj(payload: Required<NonNullable<PaymentsCreateDto>>) {
    const { msisdn, amount, transref } = payload;
    const { data } = await this.httpRequest(
      process.env.PAYMENT_QOS_MTN_REQUEST_URL,
      'POST',
      { msisdn, amount, transref, clientid: this.QOS_MTN_CID },
    );
    console.log({ data });
    if (data.responsecode === QOS_MTN_REQUEST_PAYMENT_STATUSCODE['PENDING']) {
      return {
        status: 201,
        message: QOS_MTN_REQUEST_PAYMENT_RESPONSE['PENDING'],
      };
    } else if (
      data.responsecode === QOS_MTN_REQUEST_PAYMENT_STATUSCODE['FAILED']
    ) {
      return {
        status: 405,
        message: QOS_MTN_REQUEST_PAYMENT_RESPONSE['FAILED'],
      };
    } else if (
      data.responsecode ===
      QOS_MTN_REQUEST_PAYMENT_STATUSCODE['ACCOUNTHOLDER_WITH_FRI_NOT_FOUND']
    ) {
      return {
        status: 405,
        message:
          QOS_MTN_REQUEST_PAYMENT_RESPONSE['ACCOUNTHOLDER_WITH_FRI_NOT_FOUND'],
      };
    } else if (
      data.responsecode ===
      QOS_MTN_REQUEST_PAYMENT_STATUSCODE['TARGET_AUTHORIZATION_ERROR']
    ) {
      return {
        status: 405,
        message: QOS_MTN_REQUEST_PAYMENT_RESPONSE['TARGET_AUTHORIZATION_ERROR'],
      };
    } else if (
      data.responsecode ===
      QOS_MTN_REQUEST_PAYMENT_STATUSCODE['RESOURCE_NOT_FOUND']
    ) {
      return {
        status: 405,
        message: QOS_MTN_REQUEST_PAYMENT_RESPONSE['RESOURCE_NOT_FOUND'],
      };
    } else {
      return {
        status: 201,
        message: 'RESSAYER_LE_PAYEMENT',
      };
    }
  }

  // async create_payment_moovbj(
  //   payload: Required<NonNullable<PaymentsCreateDto>>,
  // ) {
  //   const { msisdn, amount } = payload;
  //   const transref = new Date().getTime().toString();
  //   if (parseInt(amount) >= 100) {
  //     const { data } = await firstValueFrom(
  //       this.httpService.post(
  //         process.env.PAYMENT_QOS_MOOV_REQUEST_URL,
  //         {
  //           msisdn,
  //           amount,
  //           transref,
  //           clientid: process.env.PAYMENT_QOS_MOOV_CLIENT_ID,
  //         },
  //         {
  //           headers: {
  //             Authorization:
  //               'Basic ' + process.env.PAYMENT_QOS_MOOV_BEARER_TOKEN,
  //           },
  //         },
  //       ),
  //     );
  //     if (
  //       data.responsecode === this.QOS_MOOV_REQUEST_PAYMENT_STATUSCODE['FAILED']
  //     ) {
  //       return {
  //         status: 405,
  //         message: this.QOS_MOOV_REQUEST_PAYMENT_RESPONSE['FAILED'],
  //       };
  //     }
  //     if (
  //       data.responsecode ===
  //       this.QOS_MOOV_REQUEST_PAYMENT_STATUSCODE['INSUFFICIENT_FUND_ERROR']
  //     ) {
  //       return {
  //         status: 405,
  //         message:
  //           this.QOS_MOOV_REQUEST_PAYMENT_RESPONSE['INSUFFICIENT_FUND_ERROR'],
  //       };
  //     }
  //     if (
  //       data.responsecode ===
  //       this.QOS_MOOV_REQUEST_PAYMENT_STATUSCODE['SUCCESS']
  //     ) {
  //       return {
  //         status: 201,
  //         message: this.QOS_MOOV_REQUEST_PAYMENT_RESPONSE['SUCCESS'],
  //       };
  //     }
  //   } else {
  //     return {
  //       status: 404,
  //       message: 'MONTANT_SUPP_A_100',
  //       he: console.log(amount),
  //     };
  //   }
  // }
}
