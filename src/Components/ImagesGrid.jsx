import React from 'react';
import UseFireStore from '../hooks/UseFireStore';
import { motion } from 'framer-motion';

const ImagesGrid = ({ setSelectedImg }) => {
    const { docs } = UseFireStore("images");

    return(
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div 
                    className="img-wrap" 
                    key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => { setSelectedImg(doc.url) }}
                >
                    <motion.img src={doc.url} alt="Uploaded image" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default ImagesGrid;