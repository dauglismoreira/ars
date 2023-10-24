export default function Dump({obj}) {
    return (
        <div
             style={{
                 position: 'fixed',
                 top: 0,
                 left: 0,
                 backgroundColor: '#0F172A',
                 color: 'white',
                 zIndex: 1000,
                 padding: '2rem',
                 maxHeight: "100vh"
             }}
        >
            <pre>{JSON.stringify(obj, null, 2)}</pre>
        </div>
    )
}
