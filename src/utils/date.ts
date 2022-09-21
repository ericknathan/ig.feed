import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDate(date: Date) {
  return format(
    date,
    "dd 'de' LLLL 'às' HH:mm'h'", 
    { locale: ptBR }
  );
}

export function getDateRelativeToNow(date: Date) {
  return formatDistanceToNow(
    date,
    { locale: ptBR, addSuffix: true }
  );
}
