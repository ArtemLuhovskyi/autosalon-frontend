import Button from "../../components/Button/Button";


export default function TabsSection( { active, onChange }: { active: string, onChange: (current: string) => void } ) {
  return (
    <section style={{marginBottom: '3rem'}} >
        <Button isActive={active === 'cars'} onClick={() => onChange('cars')}>Cars</Button>
        <Button isActive={active === 'team'} onClick={() => onChange('team')}>Team</Button>
    </section>
  )
}