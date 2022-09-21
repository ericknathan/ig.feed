import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDate(date) {
  return format(
    date,
    "dd 'de' LLLL 'às' HH:mm'h'", 
    { locale: ptBR }
  );
}

export function getDateRelativeToNow(date) {
  return formatDistanceToNow(
    date,
    { locale: ptBR, addSuffix: ' ' }
  );
}
