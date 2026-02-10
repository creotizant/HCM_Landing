import emailjs from '@emailjs/browser';

// Unified EmailJS Configuration
export const EMAILJS_SERVICE_ID = 'service_4rg272a';
export const EMAILJS_TEMPLATE_ID = 'template_au2oiet';
export const EMAILJS_PUBLIC_KEY = 'QTclTy-J1jQ33URwf';

export const initEmailJS = () => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
};

/**
 * Sends a general contact message
 */
export const sendContactMessage = async (formData: { name: string; email: string; message: string }) => {
    return emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
            request_type: 'General Inquiry',
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            // Demographic fields (set to N/A for standard contact form)
            company_name: 'N/A',
            company_size: 'N/A',
            country: 'N/A',
            interest: 'N/A',
            to_name: 'Creotizant Team',
        }
    );
};

/**
 * Sends a demo request
 */
export const sendDemoRequest = async (formData: {
    first_name: string;
    last_name: string;
    email: string;
    company_name: string;
    company_size: string;
    country: string;
    interest: string;
}) => {
    return emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
            request_type: 'Demo Request',
            from_name: `${formData.first_name} ${formData.last_name}`,
            from_email: formData.email,
            company_name: formData.company_name,
            company_size: formData.company_size,
            country: formData.country,
            interest: formData.interest,
            message: `Demo Request for: ${formData.interest}`,
            to_name: 'Creotizant Sales Team',
        }
    );
};
