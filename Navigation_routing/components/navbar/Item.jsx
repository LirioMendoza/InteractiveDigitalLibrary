import { Paper, Button } from '@mui/material'


function Item({item})
{
    return (
        
            <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={item.image} alt={item.title} style={{ width: '30%', height: '60vh' }} />
        
            <h2>{item.title}</h2>
            
        </Paper>
    )
}
export default Item