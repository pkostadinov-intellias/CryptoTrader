# **Crypto Trader App**

## **Introduction**

Crypto Trader is a web application that allows users to **trade cryptocurrencies, view charts, manage their portfolio, and handle deposits and withdrawals**. Built using **React, Redux Toolkit, RTK Query, and Recharts**, it provides a seamless trading experience.

## **Features**

✅ **Dashboard:** Trade cryptocurrencies and view crypto charts.  
✅ **Portfolio:** Track your traded crypto coins, balance, invested value, and coin-specific details.  
✅ **Profile:** Manage deposits and withdrawals of funds.

## **Tech Stack**

- **Frontend:** React
- **State Management:** Redux Toolkit, RTK Query
- **Charts:** Recharts

## **Installation**

### **1. Install dependencies**

```bash
npm install
```

### **2. Create an `.env` File**

Before running the app, you need to set up an `.env` file in the root directory and add your API keys.

#### **Example `.env` file**

```env
VITE_BASE_API="https://api.coingecko.com/api/v3"

```

### **3. Start the Application**

Run the development server:

```bash
npm run dev
```

The app will be accessible at [`http://localhost:5173/`](http://localhost:5173/).

---

## **Pages Overview**

### **📊 Dashboard**

- Trade cryptocurrencies
- View **crypto charts** using **Recharts**

### **📈 Portfolio**

- View **traded crypto coins**
- Check **balance, invested value, and coin amounts**

### **👤 Profile**

- **Deposit funds**
- **Withdraw funds**

---

## **API Integration**

The application interacts with crypto APIs using **RTK Query** for efficient **data fetching and caching**.

---

### **🚀 Enjoy Trading!** 🚀
