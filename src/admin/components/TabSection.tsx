import Button from "../../components/Button/Button";
import '../../css/order-count.css';

export default function TabsSection( { active, onChange, orderCount }: { active: string, onChange: (current: string) => void, orderCount: number } ) {
  return (
    <section style={{marginBottom: '3rem'}} >
        <Button isActive={active === 'cars'} onClick={() => onChange('cars')}>Cars</Button>
        <Button isActive={active === 'team'} onClick={() => onChange('team')}>Team</Button>
        <Button style={{position: 'relative', display: 'inline-block'}} isActive={active === 'orders'} onClick={() => onChange('orders')}>
                Orders
                {orderCount > 0 && (
          <span className="count">{orderCount}</span>
        )}
        </Button>
        
    </section>
  )
}