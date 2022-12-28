import React from "react";
import Button from '@mui/material/Button'

function TestComponent(){
    return  <div>
                <div
                    css={{
                    backgroundColor: 'hotpink',
                    '&:hover': {
                        color: 'lightgreen'
                    }
                    }}
                >
                This has a hotpink background.
                </div>
                <h1>كيف حالك</h1>
                <button variant="contained"> hello world</button>
            </div>
}

export default TestComponent;