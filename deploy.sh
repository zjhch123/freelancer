source /etc/profile
cnpm install
cnpm run build
rm -rf /var/www/Statics/freelancer
mv ./dist /var/www/Statics/freelancer