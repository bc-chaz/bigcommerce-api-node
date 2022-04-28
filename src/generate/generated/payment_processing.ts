/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/stores/{store_hash}/payments': {
    /** Process payments for an order. See [Payment Processing](/api-docs/store-management/payment-processing) for more information. */
    post: operations['PaymentsPost'];
    parameters: {
      path: {
        store_hash: string;
      };
    };
  };
  '/stores/{store_hash}/v3/payments/access_tokens': {
    /**
     * This endpoint provides the capability to create a payment access token. The payment access token is required when making request to Payment API for submitting payment for an order.
     *
     * After the token is created, use the token to [Process Payments](/api-reference/payments/payments-process-payments/payment/paymentspost).
     *
     * **Required Fields**
     * * order_id
     */
    post: operations['PaymentsAccessTokensPost'];
    parameters: {
      path: {
        store_hash: string;
      };
    };
  };
  '/stores/{store_hash}/v3/payments/methods': {
    /**
     * Returns a list of accepted payment methods based on the `order_id` or `checkout_id`.
     *
     * **Notes**
     * * Use the [Create an Order](/api-reference/store-management/checkouts/checkout-orders/createanorder) endpoint, to generate the `order_id`.
     * * Orders created will be set to incomplete order status.
     * * The cart ID and checkout ID are the same.
     *
     * **Required Fields**
     * * order_id
     * * checkout_id
     */
    get: operations['PaymentsMethodsGet'];
    parameters: {
      path: {
        store_hash: string;
      };
    };
  };
}

export interface components {
  schemas: {
    /** Payment Request */
    PaymentRequest: {
      /** Payment */
      payment: {
        /**
         * Format: int32
         * @description Amount in smallest currency unit
         */
        amount?: number;
        /** @description Currency code */
        currency_code?: string;
        instrument: { [key: string]: unknown };
        /** @description Identifier for payment method that will be used for this payment */
        payment_method_id: string;
      };
    };
    /** Payment */
    Payment: {
      /**
       * Format: int32
       * @description Amount in smallest currency unit
       */
      amount?: number;
      /** @description Currency code */
      currency_code?: string;
      instrument: { [key: string]: unknown };
      /** @description Identifier for payment method that will be used for this payment */
      payment_method_id: string;
    };
    /** Success Payment Response */
    SuccessPaymentResponse: {
      /** @description Identifier for this transaction */
      id?: string;
      /**
       * Transaction Type
       * @description Transaction type for this payment
       * @example authorization
       */
      transaction_type?: 'authorization' | 'purchase';
      /**
       * Status
       * @description Status to indicate a success response
       */
      status?: 'success' | 'pending';
    };
    /**
     * Transaction Type
     * @description Transaction type for this payment
     * @example authorization
     */
    TransactionType: 'authorization' | 'purchase';
    /**
     * Status
     * @description Status to indicate a success response
     */
    Status: 'success' | 'pending';
    /** Error Payment Response */
    ErrorPaymentResponse: {
      /**
       * Format: int32
       * @description HTTP status code
       */
      status: number;
      /** @description Short summary describing the particular error */
      title: string;
      /** @description Detailed summary describing the particular error */
      detail?: string;
      /** @description Reference that identifies the particular error */
      type: string;
      /**
       * Format: int32
       * @description Code representing the particular error
       */
      code?: number;
      errors?: { [key: string]: string };
    };
    /** Card */
    Card: {
      /**
       * @description Type to classify this payment instrument
       * @default card
       * @example card
       */
      type: string;
      /** @description Cardholder's full name */
      cardholder_name: string;
      /** @description Credit card number */
      number: string;
      /**
       * Format: int32
       * @description Expiry month of this card
       */
      expiry_month: number;
      /**
       * Format: int32
       * @description Expiry year of this card
       */
      expiry_year: number;
      /** @description Verification value of this card (CVV or last_4) */
      verification_value?: string;
      /**
       * Format: int32
       * @description Issue month of this card
       */
      issue_month?: number;
      /**
       * Format: int32
       * @description Issue year of this card
       */
      issue_year?: number;
      /**
       * Format: int32
       * @description Issue number of this card
       */
      issue_number?: number;
    };
    /** Stored Card */
    StoredCard: {
      /**
       * @description Type to classify this payment instrument
       * @default stored_card
       * @example stored_card
       */
      type: string;
      /** @description Identifier representing this stored card */
      token: string;
    };
    /** Base Payment Response */
    BasePaymentResponse: {
      /** @description Identifier for this transaction */
      id?: string;
      /**
       * Transaction Type
       * @description Transaction type for this payment
       * @example authorization
       */
      transaction_type?: 'authorization' | 'purchase';
    };
    /** Pending Payment Response */
    PendingPaymentResponse: {
      /** @description Identifier for this transaction */
      id?: string;
      /**
       * Transaction Type
       * @description Transaction type for this payment
       * @example authorization
       */
      transaction_type?: 'authorization' | 'purchase';
      /**
       * Status
       * @description Status to indicate a success response
       */
      status?: 'success' | 'pending';
    };
    /** StoredPaypalAccount */
    StoredPaypalAccount: {
      /** @description Type to classify this payment instrument */
      type: 'stored_paypal_account';
      /** @description Identifier representing this stored paypal account */
      token: string;
    };
    /** Order */
    Order: {
      /**
       * Format: int32
       * @description Identifier for the order
       */
      id: number;
      /** @description Whether this is a recurring order. If the order is recurring this field should be set to true in order to let the payment gateway know. */
      is_recurring?: boolean;
    };
    /** Payment Access Token Request */
    PaymentAccessTokenRequest: {
      /** Order */
      order: {
        /**
         * Format: int32
         * @description Identifier for the order
         */
        id: number;
        /** @description Whether this is a recurring order. If the order is recurring this field should be set to true in order to let the payment gateway know. */
        is_recurring?: boolean;
      };
    };
    /** Payment Access Token */
    PaymentAccessToken: {
      /** @description Payment access token. This token is required in subsequent payment request to Payment API endpoint. */
      id: string;
    };
    /** paymentMethodStoredInstrument */
    paymentMethodStoredInstrument: {
      /** @description Brand of this card such as VISA or Mastercard */
      brand: string;
      /**
       * Format: int32
       * @description Expiry month of this card
       */
      expiry_month: number;
      /**
       * Format: int32
       * @description Expiry year of this card
       */
      expiry_year: number;
      /** @description Issuer identification number of this card. This is extracted from the card when the order is payed for. */
      issuer_identification_number: string;
      /** @description Last four numbers of this card */
      last_4: string;
      /** @description Identifier representing this stored card. This is used to identify cards within BigCommerce. It is the same as the `payment_access_token` that returns via the [Get Transactions endpoint](/api-reference/store-management/order-transactions/transactions/gettransactions). */
      token: string;
      /** @description Whether this instrument is a default instrument */
      is_default: boolean;
      /**
       * @description Type to classify this stored card
       * @default stored_card
       * @example stored_card
       */
      type: string;
    };
    /** paymentMethod_Full */
    paymentMethod_Full: {
      /** @description Identifier for this payment method */
      id: string;
      /** @description Name of this payment method */
      name: string;
      stored_instruments?: components['schemas']['paymentMethodStoredInstrument'][];
      supported_instruments: {
        /**
         * InstrumentType
         * @description Type of this instrument
         * @example VISA
         */
        instrument_type:
          | 'VISA'
          | 'MASTERCARD'
          | 'DISCOVER'
          | 'AMEX'
          | 'DINERS_CLUB'
          | 'JCB'
          | 'DANKORT'
          | 'MAESTRO'
          | 'STORED_CARD';
        /** @description Whether verification value is required for payment */
        verification_value_required?: boolean;
      }[];
      /** @description Whether this payment method is on test mode */
      test_mode: boolean;
      /**
       * @description Type to classify this payment method
       * @default card
       * @example card
       */
      type: string;
    };
    /** Supported Card Instrument */
    SupportedCardInstrument: {
      /**
       * InstrumentType
       * @description Type of this instrument
       * @example VISA
       */
      instrument_type:
        | 'VISA'
        | 'MASTERCARD'
        | 'DISCOVER'
        | 'AMEX'
        | 'DINERS_CLUB'
        | 'JCB'
        | 'DANKORT'
        | 'MAESTRO'
        | 'STORED_CARD';
      /** @description Whether verification value is required for payment */
      verification_value_required?: boolean;
    };
    /** Error */
    Error: {
      /**
       * Format: int32
       * @description HTTP status code
       */
      status: number;
      /** @description Short summary describing the particular error */
      title: string;
      /** @description Detailed summary describing the particular error */
      detail?: string;
      /** @description Reference that identifies the particular error */
      type: string;
      /**
       * Format: int32
       * @description Code representing the particular error
       */
      code?: number;
    };
    /** ErrorResponse */
    ErrorResponse: {
      /**
       * Format: int32
       * @description HTTP status code
       */
      status: number;
      /** @description Short summary describing the particular error */
      title: string;
      /** @description Detailed summary describing the particular error */
      detail?: string;
      /** @description Reference that identifies the particular error */
      type: string;
      /**
       * Format: int32
       * @description Code representing the particular error
       */
      code?: number;
      errors?: { [key: string]: string };
    };
    /**
     * InstrumentType
     * @description Type of this instrument
     * @example VISA
     */
    InstrumentType:
      | 'VISA'
      | 'MASTERCARD'
      | 'DISCOVER'
      | 'AMEX'
      | 'DINERS_CLUB'
      | 'JCB'
      | 'DANKORT'
      | 'MAESTRO'
      | 'STORED_CARD';
    /** StoredPaypalAccountInstrument */
    StoredPaypalAccountInstrument: {
      /**
       * Format: email
       * @description Email address of this stored account
       */
      email: string;
      /** @description Identifier representing this stored account */
      token: string;
      /** @description Whether this instrument is a default instrument */
      is_default: boolean;
      /** @description Type to classify this stored account */
      type: 'stored_paypal_account';
    };
    /** SupportedPaypalAccountInstrument */
    SupportedPaypalAccountInstrument: {
      /** @description Type of this instrument */
      instrument_type: 'STORED_PAYPAL_ACCOUNT';
    };
  };
  responses: {
    paymentsMethods_Resp: {
      content: {
        'application/json': {
          data?: components['schemas']['paymentMethod_Full'][];
        };
      };
    };
    paymentAccessToken_Resp: {
      content: {
        'application/json': {
          data?: components['schemas']['PaymentAccessToken'];
        };
      };
    };
  };
  parameters: {
    Accept: 'application/vnd.bc.v1+json';
    'Content-Type': string;
  };
}

export interface operations {
  /** Process payments for an order. See [Payment Processing](/api-docs/store-management/payment-processing) for more information. */
  PaymentsPost: {
    parameters: {
      path: {
        store_hash: string;
      };
      header: {
        /** Authorization header with a valid payment access token is required to access this endpoint e.g. Authorization: PAT a-valid-payment-access-token */
        Authorization: string;
        /** This required value must be `application/vnd.bc.v1+json` */
        Accept: 'application/vnd.bc.v1+json';
        'Content-Type': string;
      };
    };
    responses: {
      /** Payment has been successfully processed */
      202: {
        content: {
          'application/json': {
            /** @description Identifier for this transaction */
            id?: string;
            /**
             * Transaction Type
             * @description Transaction type for this payment
             * @example authorization
             */
            transaction_type?: 'authorization' | 'purchase';
            /**
             * Status
             * @description Status to indicate a success response
             */
            status?: 'success' | 'pending';
          };
        };
      };
      /** Payment request has been rejected due to malformed request */
      400: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Valid authentication required */
      401: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Payment request has been rejected due to missing, invalid data or declined by payment provider */
      422: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Internal server error */
      default: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
    };
    requestBody: {
      content: {
        'application/json': {
          /** Payment */
          payment: {
            instrument:
              | components['schemas']['Card']
              | components['schemas']['StoredCard']
              | components['schemas']['StoredPaypalAccount'];
            /** @description Identifier for payment method that will be used for this payment and `id` from the Get Accepted Payment Methods API */
            payment_method_id: string;
            /** @description To use `save_instrument`, configure the payment gateway to accept stored cards. */
            save_instrument?: boolean;
          };
        };
      };
    };
  };
  /**
   * This endpoint provides the capability to create a payment access token. The payment access token is required when making request to Payment API for submitting payment for an order.
   *
   * After the token is created, use the token to [Process Payments](/api-reference/payments/payments-process-payments/payment/paymentspost).
   *
   * **Required Fields**
   * * order_id
   */
  PaymentsAccessTokensPost: {
    parameters: {
      path: {
        store_hash: string;
      };
      header: {
        Accept?: string;
        'Content-Type'?: string;
      };
    };
    responses: {
      /** Payment access token has been successfully created */
      201: {
        content: {
          'application/json': {
            /** Payment Access Token */
            data?: {
              /** @description Payment access token. This token is required in subsequent payment request to Payment API endpoint. */
              id: string;
            };
          };
        };
      };
      /** Request has been rejected */
      400: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Valid authentication required */
      401: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Request has been rejected due to resource not being found */
      404: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Request has been rejected due to conflict with the current state of the target resource */
      409: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Request has been rejected due to missing or invalid data */
      422: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Internal server error */
      default: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
    };
    requestBody: {
      content: {
        'application/json': {
          order: components['schemas']['Order'];
        };
      };
    };
  };
  /**
   * Returns a list of accepted payment methods based on the `order_id` or `checkout_id`.
   *
   * **Notes**
   * * Use the [Create an Order](/api-reference/store-management/checkouts/checkout-orders/createanorder) endpoint, to generate the `order_id`.
   * * Orders created will be set to incomplete order status.
   * * The cart ID and checkout ID are the same.
   *
   * **Required Fields**
   * * order_id
   * * checkout_id
   */
  PaymentsMethodsGet: {
    parameters: {
      path: {
        store_hash: string;
      };
      query: {
        /** Identifier for the order */
        order_id?: number;
        /** Identifier for the checkout (same as the cart ID) */
        checkout_id?: string;
      };
      header: {
        Accept?: string;
        'Content-Type'?: string;
      };
    };
    responses: {
      200: components['responses']['paymentsMethods_Resp'];
      /** Request has been rejected */
      400: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Valid authentication required */
      401: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Request has been rejected due to resource not being found */
      404: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Request has been rejected due to missing or invalid data */
      422: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
      /** Internal server error */
      default: {
        content: {
          'application/json': {
            /**
             * Format: int32
             * @description HTTP status code
             */
            status: number;
            /** @description Short summary describing the particular error */
            title: string;
            /** @description Detailed summary describing the particular error */
            detail?: string;
            /** @description Reference that identifies the particular error */
            type: string;
            /**
             * Format: int32
             * @description Code representing the particular error
             */
            code?: number;
            errors?: { [key: string]: string };
          };
        };
      };
    };
    requestBody: {
      content: {
        'application/json': {
          order_id?: number;
          checkout_id?: string;
        };
        'application/xml': { [key: string]: unknown };
      };
    };
  };
}

export interface external {}
