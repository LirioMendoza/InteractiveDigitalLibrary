import Button from '@mui/material/Button';
import Link from 'next/link';
export default function Portada() {
    return(
        <row className="row" style={{ width: '100%', height: '300px', backgroundImage: 'url("https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVncmFkYWRvJTIwYXp1bHxlbnwwfHwwfHx8MA%3D%3D")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <div className="container" style={{ fontWeight: 'bold', fontSize: '36px' }}>
                 <h2 className="section-heading text-uppercase">UNAM e-Books</h2>
            </div>
            <h3 className="section-subheading text-muted">
             Books and magazines for all university students.
            </h3>
            <div className="container" style={{ fontWeight: 'bold', fontSize: '36px' }}>
                {/*<Button variant="contained" color="secondary" style={{ marginRight: '10px',backgroundColor: '#A9C4F4' }}>Books</Button>
                <Button variant="contained" color="secondary"  style={{backgroundColor:'#A9C4F4'}}>Magazines</Button>*/}
            </div>

        </row>
    );
}