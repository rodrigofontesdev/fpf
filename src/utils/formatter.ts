function getStatus(status: string) {
  switch (status) {
    case 'approved':
      return 'Aprovado'
    case 'pending':
      return 'Análise pendente'
    case 'inactive':
      return 'Inativo'
    default:
      return 'Status inválido'
  }
}

export const format = {
  status: getStatus,
}
