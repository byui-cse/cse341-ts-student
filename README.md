# Express Authentication App

## Overview

This is a simple Express app that demonstrates user authentication using OpenID Connect via Auth0. The app provides two routes: one for checking if a user is logged in and another to display the user's profile information.

## Prerequisites

- Auth0 account

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/byui-cse/cse341-ts-student/tree/L07-class-complete
    ```

2. Navigate into the directory:
    ```bash
    cd L07-class-complete
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Configuration

Create a `.env` file in the root of your project and add the following variables:

```env
SECRET=your_secret_key
BASE_URL=http://localhost:3000
CLIENT_ID=your_auth0_client_id
ISSUER_BASE_URL=https://your-auth0-issuer-base-url
```

## Usage
Follow the directions on the Auth0 website, watch the video if you need a step by step walkthrough.