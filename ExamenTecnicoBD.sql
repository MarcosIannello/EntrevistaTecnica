SELECT * FROM ventas;
use ventas;
SELECT Fecha_venta, SUM(cantidad) AS total_vendido
FROM ventas
GROUP BY Fecha_venta
ORDER BY total_vendido DESC
-- LIMIT 1; 

