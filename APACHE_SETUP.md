# Apache Configuration for BioCAN Landing Page

## Problem
Direct URLs like `biocan.ai/privacy-policy` return 404, but clicking links from the main page works.

## Solution
The `.htaccess` file has been created to handle URL rewriting. However, you need to ensure Apache allows `.htaccess` files.

## Check Apache Configuration

Run this on your server:

```bash
# Check if mod_rewrite is enabled
sudo /opt/bitnami/apache2/bin/httpd -M | grep rewrite

# Check if AllowOverride is set for htdocs directory
sudo grep -r "AllowOverride" /opt/bitnami/apache2/conf/ | grep -v "#"
```

## If AllowOverride is None

If you see `AllowOverride None`, you need to change it to `AllowOverride All`:

1. Edit the Apache config:
   ```bash
   sudo nano /opt/bitnami/apache2/conf/bitnami/bitnami.conf
   ```

2. Find the `<Directory>` block for `/opt/bitnami/apache/htdocs`:
   ```apache
   <Directory "/opt/bitnami/apache/htdocs">
       Options Indexes FollowSymLinks
       AllowOverride None  # Change this to All
       Require all granted
   </Directory>
   ```

3. Change `AllowOverride None` to `AllowOverride All`

4. Restart Apache:
   ```bash
   sudo /opt/bitnami/ctlscript.sh restart apache
   ```

## Verify .htaccess is Working

After deployment, check if `.htaccess` file exists:

```bash
ls -la /opt/bitnami/apache/htdocs/.htaccess
```

If it doesn't exist, the file might not be copied during build. Check the build output.

## Test URLs

After fixing, test these URLs directly:
- `https://biocan.ai/privacy-policy`
- `https://biocan.ai/terms`
- `https://biocan.ai/about`
- `https://biocan.ai/contact`
- `https://biocan.ai/cancellation-refund`
- `https://biocan.ai/shipping-delivery`

All should work without 404 errors.
