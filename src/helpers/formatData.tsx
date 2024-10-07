export class Format {
  static formatCardNumber(input: string): string {
    let formattedInput = input.replace(/\D/g, '');

    if (formattedInput.length > 16) {
      formattedInput = formattedInput.substring(0, 16);
    }

    return formattedInput.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  }

  static formatExpirationDate(input: string): string {
    return input
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{0,2})/, '$1/$2')
      .slice(0, 5);
  }

  static formatSecurityCode(input: string): string {
    return input.replace(/\D/g, '').slice(0, 3);
  }
}
