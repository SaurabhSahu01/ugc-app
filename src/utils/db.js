import * as admin from "firebase-admin";

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert({
            "type": "service_account",
            "project_id": "ugc-app-7edd3",
            "private_key_id": "0e846f589e7da5bd2514b4d065970a20a767282d",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDkaxAwn9KCjNd1\n75xLixn6QZEGR6Rl5rYtdBljWl8ZbRMUPmWw0End24kOJNeewNIdiLkeWE1ySda/\nzAZrfZpviYOSQSzND17BzRajdk2anrrgN6Ag9rc1mIX2vF7jeBLrOh5yZrXJaJfV\n7MV9gRVLTI5L6kIEl0jchWoSpSkWUEHvMfSiU5OQHw9QNrrlM7uVw7o56yBOv6bk\nO0b1V4ZjDWF6Zdjf2xHhCr5UyU6e+da2by+8vQwgV/7w1uqH0SrEYQhjOnnF+apF\nLqhOa3ms/GwyUg2Dh7NX8I4U7wgC6ZzvKpIVhuUFIGt73f9si7AFqmYhmej8CcS1\nJxp8NSXbAgMBAAECggEAEsdqkVTSbcE+hYephdxtylFRpv6E2YvaNmpxG+X2I5UA\nGI34tkyphf/iiLMmtvqLS7pN3dzMoTTI3wPbE0NESx83HfMVx9YXqD9AOTgksS2T\nl5N7Krqd3V4oxVw/QNxCUex5TFZ9Y42hzgilQ+g04/frSvp7av01FEwzqEzDz/2p\naBk2zqpzdqUMSuj8p3+V3jCL3qaHKe4KmF9eBlZnMVQMeweLs7W7NdMeNA0hM/+e\nxO8GRQZ2cDWVGuhQwVBhsSKpGh/5wsz0obM/KuBOXhBT82BHK1U1DAmRYKl7IU7t\nGWuuWLe6frG3KxnVO2jiGrMnMlTjfLax44iDQrK/gQKBgQD3wtYSUcu8oL6T/GKR\nRTLs8Q/xOKQHdUd7EaLtk/ansCjKIj12MCgomXZMVwbo6Ez92dFAytjEhY1edSJ5\nRWQ8e/xdtpnsuasbpYSISkq6AIkQgTOfM0V/jJLz337F5RBR1Zqw1dRcgJBACqU9\n+UN4O8KHXKxGx/6HgAGtQ1V4EQKBgQDsA5AzSExxNIgQI9/3baDEGy4Urw+0q5wQ\n6R44zO1vh/or0ZmG1OGGeUNKsKFEx+5IlgW9VsZG6FTsGcK2XGibWRnethQbpSts\nqxLNbsWnnU72aIIWVoMumpaM/TzDmXmVNCHZ0V5gro39mdhiLNzEQcTPfprf5ODs\nhQtBvN1LKwKBgBpO7wpM8zRZYUM3hoPkdC7ivg2gNRKxqmBwE/vkPUm7E+m6zwnw\nvSLqgLxEdXBf0mUWLvkRUQk1ITjJeVqlOqqNg9Ozow6W/ItX/QW31c2AZw2Amqmp\n+RQ9KhGJRt3en+gApYdnfUBBSo/yUW+OO1LWDabv+T8e13Et73+labrxAoGBAJDz\nF0sHqjsUokQXZGQX5lbKwqBda+3wP6d7JN6JrYGEJ7dlwT6329K1AwkKNeGCUOwv\nh1Ljyl6eLhnbMGTDmFNgg6zucqcP5/2Ti7azw5zP1kErqkmB1It40eHBXeJbjfp+\nzBN0rNwAGKCaLfUNzICUTAWLoh7D+QgKJgG3tsmFAoGBAMuJhUvDyoUuaZ8494mo\ncyqH5AnZuyE0uG32qFY9YnXUKpYfBDTeskiYv6FdUIxHtL2HdRh2v38PoX9EroMd\nYMAQyuu+shzRgQJoNtUKOHXgNjsAPf6lq583ZVFTzTReFfxQwmNzpAMXxBT/HXfh\nw1IwKQ/4NEKwrWACgX04ycYh\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-m2q24@ugc-app-7edd3.iam.gserviceaccount.com",
            "client_id": "100875854762207394252",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-m2q24%40ugc-app-7edd3.iam.gserviceaccount.com",
            "universe_domain": "googleapis.com"
          })
    })
}

export const db = admin.firestore();