import { app } from './app';
import { sequelize } from './sequelize';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is up on PORT ${PORT}`);
});
