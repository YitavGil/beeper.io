# אפיון פרויקט: מערכת ניהול ביפרים

## מטרת הפרויקט
מטרת הפרויקט היא ליצור מערכת לניהול ומעקב אחר מכשירים הנקראים "ביפרים". המערכת מאפשרת ליצור, לעדכן, למחוק ולהפעיל ביפרים, תוך מעקב אחר מיקומם ומצבם על גבי מפה.

## רכיבי המערכת
המערכת מורכבת משני חלקים עיקריים:

1. **שרת צד אחורי (Backend)**: 
   - מבוסס על Node.js עם Express
   - מספק ממשק API RESTful
   - מנהל את הנתונים של הביפרים

2. **ממשק משתמש (Frontend)**:
   - מבוסס על HTML, CSS, ו-TypeScript
   - מציג את הביפרים ומאפשר אינטראקציה עם המשתמש
   - מציג את הביפרים על גבי מפה באמצעות ספריית Leaflet

## פונקציונליות עיקרית

### ניהול ביפרים
1. **יצירת ביפר חדש**: המשתמש יכול ליצור ביפר חדש עם סטטוס התחלתי.
2. **עדכון סטטוס**: ניתן לעדכן את הסטטוס של ביפר קיים.
3. **מחיקת ביפר**: אפשרות למחוק ביפר מהמערכת.
4. **הפעלת ביפר**: הפעלת ביפר גורמת לתהליך ספירה לאחור של 10 שניות עד ל"פיצוץ".

### מעקב ותצוגה
1. **רשימת ביפרים**: הצגת כל הביפרים במערכת ברשימה.
2. **תצוגת מפה**: הצגת מיקום הביפרים על גבי מפה.
3. **עדכון בזמן אמת**: הצגת שינויים בסטטוס ובמיקום הביפרים בזמן אמת.

## תהליך חיי הביפר
1. **יצור (Produced)**: הביפר נוצר במערכת.
2. **הוספת חומר נפץ (Explosives Added)**: מציין שהוסף חומר נפץ לביפר.
3. **נשלח (Shipped)**: הביפר נשלח ליעדו.
4. **הוצב (Deployed)**: הביפר הוצב במיקום מסוים (מקבל קואורדינטות).
5. **פוצץ (Detonated)**: הביפר הופעל ו"התפוצץ" (לאחר ספירה לאחור).

## הפעלת המערכת
1. **הפעלת השרת**: 
   - יש לנווט לתיקיית הפרויקט בטרמינל
   - להריץ את הפקודה `npm install` להתקנת התלויות
   - להריץ את הפקודה `npm start` להפעלת השרת

2. **הפעלת הממשק**: 
   - יש לפתוח את קובץ ה-HTML בדפדפן
   - לחלופין, ניתן להשתמש בשרת פיתוח מקומי כמו `http-server`

## שימוש במערכת
1. **יצירת ביפר**: יש למלא את הטופס ביצירת ביפר חדש ולבחור סטטוס התחלתי.
2. **עדכון סטטוס**: לחיצה על כפתור "Update" ליד ביפר תפתח חלון מודאלי לבחירת סטטוס חדש.
3. **מחיקת ביפר**: לחיצה על כפתור "Delete" תמחק את הביפר מהמערכת.
4. **הפעלת ביפר**: לחיצה על "Activate" תתחיל את תהליך ההפעלה (רק לביפרים במצב "Deployed").
5. **צפייה במפה**: המפה מציגה את מיקום הביפרים ומתעדכנת בזמן אמת.

## טכנולוגיות
- **Backend**: Node.js, Express, TypeScript
- **Frontend**: HTML, CSS, TypeScript
- **מפה**: Leaflet.js
- **תקשורת**: Fetch API

## הערות נוספות
- המערכת משתמשת באחסון בזיכרון בלבד. במערכת אמיתית, יש להשתמש במסד נתונים.
- יש לוודא שכל הקבצים הנדרשים (כולל ספריות חיצוניות) זמינים ומקושרים כראוי.
