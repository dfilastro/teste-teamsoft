import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from '../../hooks/useCart';

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    padding: '0 4px',
  },
}));

interface CardBadgeProps {
  quantity: number;
}

export default function CartBadge({ quantity }: CardBadgeProps) {
  const { products } = useCart();

  console.log(products);

  return (
    <StyledBadge badgeContent={quantity} color='warning'>
      <AiOutlineShoppingCart size='2rem' color='var(--red-500)' />
    </StyledBadge>
  );
}
