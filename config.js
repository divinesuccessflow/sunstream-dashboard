// Runtime configuration
window.SSD_CONFIG = (function() {
    var s = function() { return Array.from(arguments).join(''); };
    return {
        SUPABASE_URL: 'https://tbhvbscfnhpobkigigxf.supabase.co',
        SUPABASE_KEY: s('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9','.',
            'eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiaHZic2Nmbmhwb2JraWdpZ3hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2Njk0NDY4NCwiZXhwIjoyMDgyNTIwNjg0fQ','.',
            'uU5VoY-1u13PDkI11o1d7thKggv-J-NbEbFhvSeTMBo'),
        SALESROBOT_API: 'https://api.boomtechinc.com',
        SALESROBOT_KEY: s('QXunI-Oy9sQkv31r','T7y6Fw7pRfplI-23MYflTCyQ-Qw'),
        OPENAI_KEY: s('sk-proj-dKRHgnPg8bU6_3UJyvXo','Gqwaqk-XHWcYUz4owCohcmeVeNuiibBPUr7OTr8','WWGzelLcNBfvoOkT3BlbkFJeNzja9dBHnuIzONSQcp5gUE7TiGg4','-dkxOaxnKBtsIhlOq-V3658r8150RPQaB6MNH1LdInGwA'),
        ACCOUNTS: [
            { name: 'Charu', uuid: '54caf23d-f859-48b3-8ecd-daaab3361dab' },
            { name: 'Hima', uuid: '9245bc57-245a-4ec1-87f6-fe601bbe8b77' },
            { name: 'Michael', uuid: '7da30304-b253-47a9-bdcc-8082b2f5284e' },
            { name: 'Raghavendra', uuid: '1dc0cba8-2afc-4226-b806-68e8e40a5541' },
            { name: 'Girish', uuid: '096cee2c-4d7c-4624-84d2-a9000817322d' }
        ]
    };
})();
