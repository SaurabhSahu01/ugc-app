import * as admin from "firebase-admin";

if(admin.apps.length === 0){
    admin.initializeApp({
        credential: admin.credential.cert({  
                "type": "service_account",
                "project_id": "ugc-app-ce148",
                "private_key_id": "0d92000a6611eb64d25568185e4a66c99ed69a0b",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDH9MDpSwRsYzN7\nMtryPuiakmeoHLfwO8F/9gYAetOs8OVBWZmnsF3tUCLkPAXuQ/KICU9cPmmwoOSr\na31T6BZSG5s5N2fyeJJ/sZGXYxv/zubbAeHyFMsMm6eRkSB3whrLnW9L5dve2bmJ\n+hlL2W5Ja+iG1nwXwRopLlfzwUX9ROZS4M8/KqD7GNewJpvEFMEwE4oOfWVP0qW5\nD/m/iheDBJ05/sgMfuKYEkj6H1tTO8mUzJTScGAVCVWe3p2tFee7gpyoZUw2W7e2\nj4bd0DZE5/Z9ps/g9KcfyNXx1f4/tOB+ApdjwEQgX0NNmO0NTgriaOL+QhTL8dd3\n3K3uEhcxAgMBAAECggEAAYajK09E+xsJXWf9A30MerXEHQJRfypeHBADpZP1DIPi\nHAAYPyjTIeAX4fBoH/rT9yAzmJLh5GX6Mlyybzc5AB4TamA7VaTmthsGADXjrkcl\nAGYPrePLiFuh3omVY5STf4F+VSPx7CMujY/wPgPOonRFj3hD0vfqr1NeR6i7IO/K\nD9Wwzn6ovyhWJQK6/+TvfqMxuf/csGwQSCXQ4x8LqMfmRLgOd3OTyuB0XLojWT1K\nFp3N1MfMKdEXdRjn0BHGomk6Kix3inMlde1X2dmwcgBu+MFiQaQDGQuXgrso5flw\nPOtg+6YEkTgTwK4H82fYNuprbU8i3Q8fhQdv8Egi4QKBgQD8TwVvT2tJxYzIVqf4\nuhRBcFIavPI4lliuQopFQT8NjcWKVqsSrJDnOjmeiTDVuwUAucr+9KiE11WK47+A\nvbYU00k3pYXzvyg2fyiACVtxdR0bE3YT0hSqr1zG7KIaC0kEKpeIGv7MGLaeogPp\nzFGFXFL8Yt+Lc5382vpGdhy+JQKBgQDK4aeWTctUxxzUt5Imk0hniN9YmFK41GP4\nuEOFMfUfv/cmFyp+ad8Uy6sOTEyZBdXxYAJhSfCYayCtsmea1QlECR9exBoMg3m1\nw6at+UXMi6Pd4J/NjSI39OFvOMvvFwniN374TfnvuAYxN0LKsPNMNyOC92/TKH4C\nHnnl8LhJHQKBgCc2+PdF9rzukWUJ4u2Lrl5FYN17BIK7C2l6OhdtfqlSoaNQuSIb\n5CGsMQxs8kQl3y8vsVdTG2YaOdducnNGCSjPdg/KEDnEOjHOLbNIwQevVijBK5cF\nDeVBgEACw2cc3eph3E9xMqzyImAhek46TWlW4icMDwaTn7iPKFsPPIRpAoGAJ9EN\nkOQHqcXCFMVKO6PgK+Gi48JRSdD1JdUT+0oIr4h/OsyFHHYuv+gQ1CeJSObqTArp\nrKpUO7WanjxLNQnmXaHktDaMXjRXaKLTTYWEe1ZUfLEe67ptIso+jBN7gprk5664\njobPLIrTPEl6JEmCFk0j/QoOukRSJpxQlB4gLMkCgYACUu48dtTuQznlLg+R4Kx6\n09M7dWnE5WQMmAc703Bg9w1WwSMCe5NaPWbinMke94TTDqRhwczTzXmAzS0CrTSC\nOHZ49jJkBW9JtyOoJJrhH7GryJv9MKQPJndVMN57cadTUblB9lLwH0HI3VkHenVO\nwvJ2zycsD64jw4OgI5xVuQ==\n-----END PRIVATE KEY-----\n",
                "client_email": "firebase-adminsdk-ag9mj@ugc-app-ce148.iam.gserviceaccount.com",
                "client_id": "113287087421658435189",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ag9mj%40ugc-app-ce148.iam.gserviceaccount.com",
                "universe_domain": "googleapis.com"
        })
    })
}

export const db = admin.firestore();